/**
 *@description: LowBar i.e footer where all of your social media links are placed
 @author: Ankith Rakesh
 * @returns JSX
 */

function LowBar() {
  return (
    <>
      <footer id="dk-footer" className="dk-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-4">
              <div className="dk-footer-box-info">
                <h2 id="movie-para">Metro Shoes</h2>
                <p className="footer-info-text">
                  Reference site about Lorem Ipsum, giving information on its
                  origins, as well as a random Lipsum generator.
                </p>
                <div className="footer-social-link">
                  <h3>Follow us</h3>
                  <ul>
                    <li>
                      <a href="/">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-8">
              <div className="row">
                <div className="col-md-6">
                  <div className="contact-us">
                    <div className="contact-icon">
                      <i className="fa fa-map-o" aria-hidden="true"></i>
                    </div>
                    <div className="contact-info">
                      <h3> India</h3>
                      <p>5353 Road Avenue</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="contact-us contact-us-last">
                    <div className="contact-icon">
                      <i
                        className="fa fa-volume-control-phone"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div className="contact-info">
                      <h3>95 711 9 XXXX</h3>
                      <p>Give us a call</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-lg-6">
                  <div className="footer-widget footer-left-widget">
                    <div className="section-heading">
                      <h3>Useful Links</h3>
                      <span className="animate-border border-black"></span>
                    </div>
                    <ul>
                      <li>
                        <a href="/">About us</a>
                      </li>
                      <li>
                        <a href="/">Services</a>
                      </li>
                      <li>
                        <a href="/">Projects</a>
                      </li>
                      <li>
                        <a href="/">Our Team</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="/">Contact us</a>
                      </li>
                      <li>
                        <a href="/">Blog</a>
                      </li>
                      <li>
                        <a href="/">Branches</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6">
                  <div className="footer-widget">
                    <div className="section-heading">
                      <h3>Subscribe</h3>
                      <span className="animate-border border-black"></span>
                    </div>
                    <p>
                      {" "}
                      Don’t miss to subscribe to our new feeds, kindly fill the
                      form below. Reference site about getting best shoes, at 
                      information on its origins, as well.
                    </p>
                    {/* <!-- End form --> */}
                  </div>
                  {/* <!-- End footer widget --> */}
                </div>
                {/* <!-- End Col --> */}
              </div>
              {/* <!-- End Row --> */}
            </div>
            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Widget Row --> */}
        </div>
        {/* <!-- End Contact Container --> */}
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <span>Copyright © 2021, All Right Reserved </span>
              </div>
            </div>
            {/* <!-- End Row --> */}
          </div>
          {/* <!-- End Copyright Container --> */}
        </div>
      </footer>
    </>
  );
}
export default LowBar; // exporting LowBar by default
