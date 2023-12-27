import './footer.scss';

export function Footer() {
  return (
    <footer>
      <p>
        <span className="footer-brand-name">TodoTechOfertas</span>
        <span className="footer-brand-by">by</span>
        <a
          href="https://www.linkedin.com/in/abelnaharro/"
          className="link-linkedin"
        >
          <i className="fa-brands fa-linkedin"></i> Abel Naharro
        </a>
        <a href="https://github.com/abelnhm" className="link-github">
          <i className="fa-brands fa-square-github"></i> abelnhm
        </a>
      </p>
    </footer>
  );
}
