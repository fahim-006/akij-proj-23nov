import FooterMain from "./images/Footer.PNG";
import Facebook from "./images/fb.PNG";
import Instagram from "./images/instagram.PNG";
import Twitter from "./images/twitter.PNG";
import Youtube from "./images/youtube.PNG";
import Map from "./images/footerMap.PNG";
import { Link } from "react-router-dom";

const Footer = () => {
  function makeFile() {
    return {
     mime: 'text/plain',
     filename: 'Official-Presentation.ppsx',
     contents: 'all of the exports',
    }
  }
  
  return (
    <div className="footer">
      <div className="container-fluid">
        <div className="row d-flex">
          <div className="col-lg-3 col-md-12 col-sm-12">
            <img
              src={FooterMain}
              alt="Logo"
              width="100%"
              className="FooterImage"
            />
            <div className="flex-container-card">
              <div className="flex-item-card">
                <img
                  src={Facebook}
                  style={{ borderRadius: "50%" }}
                  width="50%"
                />
              </div>

              <div className="flex-item-card">
                <img
                  src={Instagram}
                  style={{ borderRadius: "50%" }}
                  width="50%"
                />
              </div>

              <div className="flex-item-card">
                <img
                  src={Twitter}
                  style={{ borderRadius: "50%" }}
                  width="50%"
                />
              </div>

              <div className="flex-item-card">
                <img
                  src={Youtube}
                  style={{ borderRadius: "50%" }}
                  width="50%"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12">
            <div class="flex-container-footer-link">
              <div class="flex-item-footer-link" style={{ fontWeight: "bold" }}>
                SUPPORT
              </div>

              <div class="flex-item-footer-link">Blog</div>

              <div class="flex-item-footer-link">
                <Link className="footer-link" to="/faq">FAQ</Link> 
                </div>

              <div class="flex-item-footer-link">Calculator</div>

              <div class="flex-item-footer-link"  genFile={makeFile}>
                <a className="footer-link" href="/pptx/Official-Presentation.ppsx">Powerpoint(PPTX)</a> 
                </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12 d-flex">
            <div class="flex-container-footer-link">
              <div class="flex-item-footer-link" style={{ fontWeight: "bold" }}>
                Delearship
              </div>

              <div class="flex-item-footer-link">Apply</div>

              <div class="flex-item-footer-link">Required Document</div>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12 ">
            <div class="flex-container-footer-link">
              <div class="flex-item-footer-link" style={{ fontWeight: "bold" }}>
                LINKS
              </div>
              <div class="flex-item-footer-link">
              <Link className="footer-link" to="/termsandconditions">Terms &amp; Conditions</Link>      
                </div>

              <div class="flex-item-footer-link">
              <Link className="footer-link" to="/privacypolicy">Privacy &amp; Policy</Link>
              </div>   

              <div class="flex-item-footer-link">
                <Link className="footer-link" to="/dealers">Dealer</Link>
              </div>

              <div class="flex-item-footer-link">
              <Link className="footer-link" to="/">Career</Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
