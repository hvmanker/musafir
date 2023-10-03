import "./css/footer.css";



export const Footer = () => {
  return (
    <footer className="footer">
      <div className="left">
        <p className="footer-text">Indian Tourism</p>
      </div>
      <div className="right">
        <p className="footer-text">
            Connect
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </p>
      </div>
    </footer>
  );
};
