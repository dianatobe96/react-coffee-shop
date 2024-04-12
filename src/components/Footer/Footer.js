import './Footer.css';
import IconMap from '../../assets/icons/iconMapPin.svg';
import PhoneIcon from '../../assets/icons/iconPhone.svg';
import MailIcon from '../../assets/icons/iconEnvelope.svg';
import ClockIcon from '../../assets/icons/iconClock.svg';
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
                        <li>
                        <img src={IconMap} alt="iconmap" />  
                            <p>68 Rue Main, Toronto, Ontario</p>
                        </li>
                        <li>
                            <img src={PhoneIcon} alt="phone" />  
                            <p>(619) 663-1266</p>
                        </li>
                        <li>
                            <img src={MailIcon} alt="mail" />   
                            <p>coffeshop@gmail.com</p>
                        </li>
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
    )
}
