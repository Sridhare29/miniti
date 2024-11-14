import React from 'react'
import footer_logo from '../../assets/logo_big.png'
import instagram_icon from '../../assets/instagram_icon.png'
import pintester_icon from '../../assets/pintester_icon.png'
import whatsapp_icon from '../../assets/whatsapp_icon.png'
import './Footnote.css'

function Footnote() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>Miniti</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-continer">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-continer">
          <img src={pintester_icon} alt="" />
        </div>
        <div className="footer-icons-continer">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr/>
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  );
}

export default Footnote