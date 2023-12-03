
import PropTypes from 'prop-types';  // Importa PropTypes

const Link = (props) => {
  return (
    <li className={`${props.type}-item`}>
      <a
        title={`${props.type}-link`}
        href={props.href}
        target={props.openInNewTab ? '_blank' : ''}
      >
        {props.text}
      </a>
    </li>
  );
};

Link.propTypes = {
  type: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  openInNewTab: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

export default Link;