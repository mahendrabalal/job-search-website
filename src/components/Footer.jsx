import "./Footer.css"

function Footer (){
  return(
    <div id="footer">
      <div id="footer-text">
        <h5>Get in Touch</h5>
        <p></p>
      </div>
      <div id="footer-info">
        <div id="footer-links">
          <h5>Mahendra</h5>
          <a href="" target="_blank"><img src="../assets/github-logo.png" alt="github"/></a>
          <a href="" target="_blank"><img src="../assets/linkedin-logo.png" alt="linkedin"/></a>
        </div>
        <div id="footer-links">
        <h5>Rafael</h5>
          <a href="https://github.com/Rafa3399" target="_blank"><img src="../assets/github-logo.png" alt="github"/></a>
          <a href="https://www.linkedin.com/in/rafael-hernandez-soler-7a449323b/" target="_blank"><img src="../assets/linkedin-logo.png" alt="linkedin"/></a>
        </div>
      </div>
    </div>
  )
}

export default Footer;