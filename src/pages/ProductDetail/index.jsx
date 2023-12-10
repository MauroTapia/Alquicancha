import React, { useContext, useEffect, useState } from "react";
import {
  Detail,
  Header,
  Title,
  CardDetail,
  Images,
  ImagePrincipal,
  ImagesSecondaries,
  Body,
  ProductDetails,
  TextDetails,
  Categories,
  Caracteristicas,
  ButtonReserva,
  Included,
  Price,
} from "./ProdcutDetail.style";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import flecha from "../../assets/flecha.png";
import Modal from "react-modal";
import ImageModal from "./modules/ImageModal";
import Footer from "../../modules/Footer/index";
import { productoById } from "../../services/product/productFirebase";
import { ContextGlobal } from "../../context/context";
import { getAtributoById } from "../../services/atributos/AtributosFirebase";
import Swal from "sweetalert2";

import DatePicker, { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
registerLocale("es", es);

import "react-datepicker/dist/react-datepicker.css";

const customStyles = {
  content: {
    top: "55%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    maxWidth: "1000px",
    height: "80vh",
  },
};

const ProductDetail = () => {
  const { id } = useParams();

  const { categorias, logged } = useContext(ContextGlobal).contextValue;
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [imagePrincipal, setImagePrincipal] = useState(null);
  const [selected, setSelected] = useState(0);
  const [atributos, setAtributos] = useState({});

  const [modalOpen, setModalOpen] = useState(false);

  const [dateRange, setDateRange] = useState(null, null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const minDate = Date.now();

  // ***********************************************
  // SE TRAE LAS FECHAS YA RESERVADAS DEL PRODUCTO
  // ***********************************************

  const [events, setEvents] = useState([]);

  useEffect(()=>{
    if(product){
      const hayReservas = product.reservas && Object.keys(product.reservas).length > 0;
      if(hayReservas){
        const reservasArray = Object.values(product.reservas);
        const mappedEvents = reservasArray.map((reserva) => ({
          start: new Date(reserva.inicio),
          end: new Date(reserva.final),
        }));
        setEvents(mappedEvents);
        console.log(mappedEvents);
      }
    }
  },[product]);

  // obtenerReservas();
  useEffect(() => {
    const getProducto = async () => {
      const product = await productoById(id);
      setProduct(product);
      setImagePrincipal(product.imagenes[0]?.urlImage);

      // Obtener atributos y guardarlos en el estado
      const atributosData = await Promise.all(
        product.detalles.map(async (detalle) => await getAtributoById(detalle))
      );
      setAtributos(atributosData);
    };

    getProducto();
    window.scrollTo(0, 0);
  }, []);

  const getCategoriaNombre = (id) => {
    const categoria = categorias.find((item) => item.id === id);
    return categoria.titulo;
  };

  const handleSecondaryImageClick = (index) => {
    if (selected !== index) {
      setImagePrincipal(imagenes[index].urlImagen);
      setSelected(index);
    }
  };

  const handleImageClick = () => {
    console.log("click en la imagen");
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const formatearFecha = (fechaOriginal) => {
    // Obtener año, mes y día de la fecha original
    const año = fechaOriginal.getFullYear();
    const mes = ("0" + (fechaOriginal.getMonth() + 1)).slice(-2); 
    const dia = ("0" + fechaOriginal.getDate()).slice(-2); 

    // Formatear la fecha en el formato (YYYY-MM-DD)
    const fechaFormateada = año + "-" + mes + "-" + dia;
    return fechaFormateada;
  };

  const onChangeDate = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const disabledDateRanges = events && events.map((range) => ({
    start: new Date(range.start),
    end: new Date(range.end),
  }));

  const fechaEstaEntre = (fecha, inicio, fin) => {
    return fecha >= inicio && fecha <= fin;
  };

  const existeFechaEnRango = events.some((evento) => {
    const inicioEvento = evento.start;
    const finEvento = evento.end;

    return (
      fechaEstaEntre(inicioEvento, startDate, endDate) ||
      fechaEstaEntre(finEvento, startDate, endDate) ||
      (inicioEvento < startDate && finEvento > endDate)
    );
  });

  const diasDeReserva = (start, end) => {
    const fechaInicio = new Date(start);
    const fechaFin = new Date(end);

    const diferencia = fechaFin - fechaInicio;
    const dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24));
    return dias + 1;
  };

  const verificarFechas = () => {
    // Calcular el número de milisegundos en dos días
    const dosDiasEnMilisegundos = 2 * 24 * 60 * 60 * 1000;
    const diferenciaEnMilisegundos = endDate - startDate;

    if (diferenciaEnMilisegundos < dosDiasEnMilisegundos) {
      Swal.fire({
        title: "Verifica las fechas!",
        text: `Minimo para una reserva 24hs!`,
        icon: "warning",
      });
      return false;
    }

    if (existeFechaEnRango) {
      Swal.fire({
        title: "Verifica las fechas!",
        text: `Existen fechas no disponibles en tu selección!`,
        icon: "warning",
      });
      return false;
    }

    return true;
  };

  const handleReserva = () => {
    if (logged) {
      const estadoReserva = verificarFechas();

      if (estadoReserva) {
        const checkout = {
          productId: id,
          fechaInicio: formatearFecha(startDate),
          fechaFinal: formatearFecha(endDate),
          precio: precio,
          dias: diasDeReserva(formatearFecha(startDate), formatearFecha(endDate)),
        }
        localStorage.setItem('Checkout', JSON.stringify(checkout));
        navigate('/checkout');
      }
    } else {
      Swal.fire({
        title: "Login necesario!",
        text: `Debes estar logueado para hacer una reserva!`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: `Iniciar sesión`,
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  if (!product) {
    return <p>Cargando...</p>;
  }

  const { imagenes, titulo, precio, descripcion, categoria, detalles } =
    product;

  return (
    <>
      <Detail>
        <CardDetail>
          <Header>
            <Link to={"/"}>
              <img src={flecha} alt="flecha" />
              Volver
            </Link>
            <Title>{titulo}</Title>
          </Header>
          <Body>
            <Images>
              <ImagePrincipal>
                {imagePrincipal !== undefined && (
                  <img
                    src={imagePrincipal}
                    alt={"Imagen"}
                    onClick={handleImageClick}
                  />
                )}
              </ImagePrincipal>

              <ImagesSecondaries>
                {product.imagenes.length > 0 &&
                  product.imagenes.map((image, index) => (
                    <img
                      src={image.urlImage}
                      alt={image.urlImage}
                      key={index}
                      onClick={() => handleSecondaryImageClick(index)}
                      className={selected === index ? "selected" : ""}
                    />
                  ))}
              </ImagesSecondaries>
            </Images>

            <ProductDetails>
              <TextDetails>{descripcion}</TextDetails>
              <Categories>
                Categoría: {getCategoriaNombre(categoria)}
              </Categories>
              <Price>$ {precio} x día</Price>
              {detalles.length ? (
                <Caracteristicas>
                  <p>Que incluye:</p>
                  <Included>
                    <ul>
                      {atributos.length > 0 &&
                        atributos.map((detail, index) => (
                          <li key={index}>
                            <img src={detail.urlImage} alt={detail.titulo} />
                            <p>{detail.titulo}</p>
                          </li>
                        ))}
                    </ul>
                  </Included>
                </Caracteristicas>
              ) : null}
            </ProductDetails>
          </Body>
          <div
            style={{
              marginTop: 40,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <DatePicker
              locale={es}
              selected={startDate}
              onChange={onChangeDate}
              endDate={endDate}
              startDate={startDate}
              minDate={minDate}
              selectsRange={true}
              inline
              monthsShown={2}
              excludeDateIntervals={events.length && disabledDateRanges}
            />
            <ButtonReserva style={{ maxWidth: 480 }} onClick={handleReserva}>
              Reservar
            </ButtonReserva>
          </div>
        </CardDetail>

        <Modal isOpen={modalOpen} style={customStyles} ariaHideApp={false}>
          <ImageModal images={imagenes} closeModal={closeModal} />
        </Modal>
      </Detail>
      <Footer />
    </>
  );
};

export default ProductDetail;
