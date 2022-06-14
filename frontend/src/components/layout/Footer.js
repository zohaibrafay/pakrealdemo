import React, { Fragment } from 'react'
import { Route, Link } from 'react-router-dom'
const Footer = () => {
  return (
    <Fragment>
<footer id="footer" className="footer bg-overlay">
  <div className="footer-main">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-4 col-md-6 footer-widget footer-about">
          <h3 className="widget-title">About Us</h3>
          <img loading="lazy" width="100px" height={80} className="footer-logo" src="/images/shopit_logo.png" />
          <p>Building your own home is about desire, fantasy. But it’s achievable anyone can do it.</p>
          <div className="footer-social">
            <ul>
              <li><i className="fa fa-facebook-square ml-3 mr-3" /></li>
              <li><i className="fa fa-twitter-square mr-3" />
              </li>
              <li><i className="fa fa-instagram mr-3" /></li>
              <li><i className="fa fa-youtube-play mr-3" /></li>
            </ul>
          </div>{/* Footer social end */}
        </div>{/* Col end */}
        <div className="col-lg-4 col-md-6 footer-widget mt-5 mt-md-0">
          <h3 className="widget-title">Working Hours</h3>
          <div className="working-hours">
            We work 7 days a week, every day excluding major holidays. Contact us if you have an emergency, with our
            Hotline and Contact form.
            <br /><br /> Monday - Friday: <span className="text-right">10:00 - 16:00 </span>
            <br /> Saturday: <span className="text-right">12:00 - 15:00</span>
            <br /> Sunday and holidays: <span className="text-right">09:00 - 12:00</span>
          </div>
        </div>{/* Col end */}

        <div className="col-lg-4 col-md-6 footer-widget mt-5 mt-md-0">
          <h3 className="widget-title">Contact Us</h3>
          <div className="working-hours">
            <h8>Address</h8><br />
            <p>Bitya Mianwali</p>
            <h8>Contact No</h8><br />
            <p>+923445624726 <br/>
            +923423642627</p>
            <h8>Email</h8><br />
            <p>PakRealConstruction@gmail.com</p>
            
          </div>
        </div>{/* Col end */}
       




      </div>{/* Row end */}
    </div>{/* Container end */}
  </div>{/* Footer main end */}
  <div className="copyright">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="copyright-info text-center text-md-left">
            <span>Copyright © , Designed &amp; Developed by <a href="">PakRealConstruction</a></span>
          </div>
        </div>
       
      </div>{/* Row end */}
      <div id="back-to-top" data-spy="affix" data-offset-top={10} className="back-to-top position-fixed">
        <button className="btn btn-primary" title="Back to Top">
          <i className="fa fa-angle-double-up" />
        </button>
      </div>
    </div>{/* Container end */}
  </div>{/* Copyright end */}
</footer>{/* Footer end */}



    </Fragment>
  )
}

export default Footer
