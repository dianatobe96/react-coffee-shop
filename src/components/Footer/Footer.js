import React, { useState } from 'react';
import './Footer.css';
import IconMap from '../../assets/icons/iconMapPin.svg';
import PhoneIcon from '../../assets/icons/iconPhone.svg';
import MailIcon from '../../assets/icons/iconEnvelope.svg';
import ClockIcon from '../../assets/icons/iconClock.svg';

function ContactItem({ icon, text, link }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const hoverStyle = {
    color: isHovered ? '#bc9a6c' : 'white', 
    paddingLeft: isHovered ? '10px' : '0px', 
    transition: 'all 0.3s ease',
  };

  return (
    <li>
      <a href={link} target="_blank" rel="noopener noreferrer" style={hoverStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <img src={icon} alt="icon" />
        <p>{text}</p>
      </a>
    </li>
  );
}

export default function Footer() {
  return (
    <div>
      <div className="footer-outer-wrapper d-flex align-items-center">
        <div className="footer-wrapper">
          <footer id="contact" className="container d-flex align-items-center">
            <div className="left-side">
              <h2>Coffee Shop</h2>
              <p>
                To our coffee oasis! Explore our menu, discover our story, and join
                our community. Contact us for inquiries. Enjoy your brew!
              </p>
            </div>

            <div className="right-side">
              <p>Contact us</p>

              <ul>
                <ContactItem icon={IconMap} text="68 Rue Main, Toronto, Ontario" link="https://maps.google.com" />
                <ContactItem icon={PhoneIcon} text="(619) 663-1266" link="tel:+16196631266" />
                <ContactItem icon={MailIcon} text="coffeshop@gmail.com" link="mailto:coffeshop@gmail.com" />
                <li>
                  <img src={ClockIcon} alt="clock" />
                  <p>Mon-Sun/10AM - 8PM</p>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
