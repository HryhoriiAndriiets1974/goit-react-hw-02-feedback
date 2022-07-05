import css from './Logo.module.css';

const Logo = () => {
  return (
    <div className={css.logo}>
      <img src="https://lviv-online.com/ua/wp-content/uploads/2013/09/Kopalnja.png" alt="Logo"></img>
    </div>
  )
};

export default Logo;
