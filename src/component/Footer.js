import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-socialmedia">
        <a aria-label="Twitter" href="https://twitter.com/" target="blank">
          <i className="fab fa-twitter-square"></i>
        </a>
        <a
          aria-label="Instagram"
          href="https://www.instagram.com/?hl=en"
          target="blank"
        >
          <i className="fab fa-instagram-square"></i>
        </a>
        <a
          aria-label="Facebook"
          href="https://www.facebook.com/"
          target="blank"
        >
          <i className="fab fa-facebook-square"></i>
        </a>
      </div>

      <div>
        <p className="copyright">&copy; 2020</p>
      </div>
    </footer>
  );
}

export default Footer;
