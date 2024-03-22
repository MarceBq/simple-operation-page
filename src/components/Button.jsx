import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Link -> Este componente se utiliza para crear enlaces entre diferentes rutas en tu aplicación. A diferencia de un enlace <a> tradicional, Link utiliza la API de React Router para navegar entre rutas sin recargar la página completa. Esto mejora la experiencia del usuario y mantiene el estado de la aplicación mientras navegas entre diferentes vistas.

export default function Button(props) {
  const { operation, ip, img } = props;

  return (
    <button 
      className="mx-1 my-1 px-5 py-5 text-xl bg-yellow-600 border border-solid border-transparent rounded-lg"
      style={{ width: '48%', fontSize: '1.5rem' }}
    >
      <Link className="w-full" to={`/${ip}`}>
        {img && <img src={img} alt={operation} />}
        {operation}
      </Link>
    </button>
  );
}

Button.propTypes = {
  operation: PropTypes.string.isRequired,
  ip: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
