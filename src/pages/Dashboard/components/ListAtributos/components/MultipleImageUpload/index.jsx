import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const MultipleImageUploader = ({ uploadedFiles, setUploadedFiles}) => {

  const onDrop = useCallback((acceptedFiles) => {
    // Filtrar solo archivos jpg y png
    const validFiles = acceptedFiles.filter(
      (file) => file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/svg'
      || file.type === 'image/webp'
    );

    // Agregar cada archivo al estado
    setUploadedFiles((prevFiles) => [...prevFiles, ...validFiles]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpg'],
      'image/svg': ['.svg'],
      'image/webp': ['.webp'],
    }
  });


  return (
    <div style={{maxWidth:'600px'}}>
      <div {...getRootProps()} style={dropzoneStyles}>
        <input {...getInputProps()} />
        <p>Arrastra y suelta imágenes aquí, o haz clic para seleccionarlas</p>
      </div>
      <div style={{maxWidth:'600px'}}>
        <h4>Imágenes subidas:</h4>
        <ul style={{display:'flex',gap:5, listStyle:'none', flexWrap:'wrap'}}>
          {uploadedFiles?.map((file, index) => (
            <li key={index}>
              <img
                src={file.path ? URL.createObjectURL(file) : file.urlImage}
                alt={`Thumbnail ${file.name ? file.name : 'Imagen de producto'}`}
                style={thumbnailStyles}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const dropzoneStyles = {
  border: '2px dashed #cccccc',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
};

const thumbnailStyles = {
  maxWidth: '100px',
  maxHeight: '100px',
  margin: '10px 0',
  padding:' 4px',
  border: '2px solid #cccccc'
};

export default MultipleImageUploader;
