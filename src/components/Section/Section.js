import PropTypes from 'prop-types';
import css from './Section.module.css';

const Section = ({title, children}) => {
  return (
    <div className={css.section}>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default Section;
