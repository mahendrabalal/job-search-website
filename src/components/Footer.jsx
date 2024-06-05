import "./Footer.css"
import githubLogo from "../assets/github-logo.png"
import linkedinLogo from "../assets/linkedin-logo.png"

function Footer (){
  return(
    <div id="footer">
      <div id="footer-text">
        <h5>Get in Touch</h5>
        <p>If you need solutions for your website, don't hesitate to contact us!</p>
      </div>
      <div id="footer-info">
        <div id="footer-links">
          <h5>Mahendra</h5>
          <div id="footer-img">
            <a href="https://github.com/mahendrabalal" target="_blank"><img src={githubLogo} alt="github"/></a>
            <a href="https://www.linkedin.com/in/mahendra-balal-11356344/" target="_blank"><img src={linkedinLogo} alt="linkedin"/></a>
          </div>
        </div>
        <div id="footer-links">
        <h5>Rafael</h5>
        <div id="footer-img">
          <a href="https://github.com/Rafa3399" target="_blank"><img id="github" src={githubLogo} alt="github"/></a>
          <a href="https://www.linkedin.com/in/rafael-hernandez-soler-7a449323b/" target="_blank"><img id="linkedin" src={linkedinLogo} alt="linkedin"/></a>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;