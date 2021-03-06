import React from 'react';
import facebook from '../images/Vector_3.svg';
import instagram from '../images/Group_13.svg';

import './Footer.scss';

export const Footer = () => (

  <div className="wrapper">
      <footer id="footer" className="footer body__footer">
        <div className="footer__list">
          <p className="footer__btn">
            <span>All pictures were used from:</span>
            <a className="footer__link" href="https://www.freepik.com/search?dates=any&format=search&page=2&query=face+silhouette&sort=popular">FREEPIK</a>
          </p>
        </div>

        <div className="footer__copyright">
          <span className="footer__copyright-hide">Copyright </span> &copy; 2021
        </div>

        <div className="footer__contacts">
            <a
              href="tel:+380 661446828"
              className="footer__tel">
              +380661446828
            </a>
        </div>

        <div className="footer__networks">
          <a className="footer__networksLink footer__networksLink-first" href="https://www.facebook.com">
            <img src={facebook} alt="facebook"></img>
          </a>

          <a className="footer__networksLink" href="https://www.instagram.com">
            <img src={instagram} alt="instagram"></img>
          </a>
        </div>
      </footer>
  </div>
)
