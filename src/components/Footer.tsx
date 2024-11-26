import "../css/Footer.css";

const Footer = () => {
  return (
    <footer>
      <p className="header-p">Jetez un coup d'œil sur :</p>
      <a
        className="icon-footer"
        target="_blank"
        href="https://github.com/HamzaChl"
      >
        <i className="fab fa-github"></i>
      </a>
      <a
        className="icon-footer"
        target="_blank"
        href="https://www.instagram.com/hamzaachl/"
      >
        <i className="fab fa-instagram"></i>
      </a>
      <a
        className="icon-footer"
        target="_blank"
        href="https://wa.me/32486923182"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </footer>
  );
};

export default Footer;
