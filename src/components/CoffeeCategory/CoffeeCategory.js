import './CoffeeCategory.css';
import Cappuccino from '../../assets/icons/icon1left.svg';
import Latte from '../../assets/icons/Icon2left.svg';
import DarkCoffee from '../../assets/icons/Icon3left.svg';
import TurkishCoffee from '../../assets/icons/icon1right.svg';
import Pancakes from '../../assets/icons/icon2right.svg';
import CoffeeBag from '../../assets/icons/Icon3right.svg';
import CupOfCoffee from '../../assets/images/photo4.jpg';

export default function CoffeeCategory() {
    return (
        <div>
             <section id="categories">
                <header>
                    <h2 className="title">
                    Coffee <br />
                    Category
                    </h2>
                    <p>
                    Awaken your senses with a rich, aromatic blend of freshly brewed
                    coffee.
                    </p>
                </header>

                <section className="categories-info d-flex align-items-center container">
                    <div className="left-side">
                    <ul>
                        <li>
                        <div>
                        <img className='list-icon quality-icon' src={Cappuccino} alt="Cappuccino Icon" />
                        </div>
                        <div className="quality-text">
                            <h3>Cappuccino</h3>
                            <p>Rich, frothy espresso with foam</p>
                        </div>
                        </li>

                        <li>
                        <div>
                            <img className='list-icon' src={Latte} alt="Cafe Latte Icon" />
                        </div>
                        <div className="quality-text">
                            <h3>Cafe latte</h3>
                            <p>Creamy espresso with steamed milk.</p>
                        </div>
                        </li>

                        <li>
                        <div>
                        <img className='list-icon' src={DarkCoffee} alt="Dark Coffee Icon" />
                        </div>
                        <div className="quality-text">
                            <h3>Dark coffee</h3>
                            <p>Bold, robust, intense, rich flavor.</p>
                        </div>
                        </li>
                    </ul>
                    </div>

                    <img src={CupOfCoffee} alt="Cup of coffee" />

                    <div className="right-side">
                    <ul>
                        <li>
                        <div className="quality-text">
                            <h3>Turkish coffee</h3>
                            <p>Strong, aromatic, finely ground espresso.</p>
                        </div>
                        <div>
                             <img className='list-icon quality-icon' src={TurkishCoffee} alt="Turkish Coffee Icon" />
                        </div>
                        </li>

                        <li>
                        <div className="quality-text">
                            <h3>Pancakes</h3>
                            <p>Fluffy, golden, sweet breakfast treat.</p>
                        </div>
                        <div>
                             <img className='list-icon' src={Pancakes} alt="pancakes" />
                        </div>
                        </li>

                        <li>
                        <div className="quality-text">
                            <h3>Coffee Bag</h3>
                            <p>Convenient, portable, ground coffee pouch.</p>
                        </div>
                        <div>
                            <img className='list-icon' src={CoffeeBag} alt="coffee bag" />
                        </div>
                        </li>
                    </ul>
                    </div>
                </section>
            </section>
        </div>
    )
}
