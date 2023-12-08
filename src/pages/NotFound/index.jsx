import { useEffect } from 'react';
import error from '../../assets/404.png'
import { NotFoundWrapper } from './notfound.style'

const NotFound = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <NotFoundWrapper style={{marginTop:'120px'}}>
      <img src={error} alt="NotFound Image" />
      <p>Página no encontrada</p>
    </NotFoundWrapper>
  )
}

export default NotFound