import React, { useState } from 'react';
import './CoffeeCategory.css';
import Cappuccino from '../../assets/icons/icon1left.svg';
import Latte from '../../assets/icons/Icon2left.svg';
import DarkCoffee from '../../assets/icons/Icon3left.svg';
import TurkishCoffee from '../../assets/icons/icon1right.svg';
import Pancakes from '../../assets/icons/icon2right.svg';
import CoffeeBag from '../../assets/icons/Icon3right.svg';
import CupOfCoffee from '../../assets/images/photo4.jpg';

export default function CoffeeCategory() {
    const [hoverStates, setHoverStates] = useState([
      { isHovered: false },
      { isHovered: false },
      { isHovered: false },
      { isHovered: false },
      { isHovered: false },
      { isHovered: false }
    ]);

    const handleMouseEnter = (index) => {
      const updatedHoverStates = [...hoverStates];
      updatedHoverStates[index].isHovered = true;
      setHoverStates(updatedHoverStates);
    };
  
    const handleMouseLeave = (index) => {
      const updatedHoverStates = [...hoverStates];
      updatedHoverStates[index].isHovered = false;
      setHoverStates(updatedHoverStates);
    };
  
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
                        <img className='list-icon' src={Cappuccino} alt="Cappuccino Icon" 
                          onMouseEnter={() => handleMouseEnter(0)}
                          onMouseLeave={() => handleMouseLeave(0)}
                          style={{ padding: hoverStates[0].isHovered ? '10px' : '0px', transition: 'padding 0.3s ease' }}
                          />
                        </div>
                        <div className="quality-text">
                            <h3>Cappuccino</h3>
                            <p>Rich, frothy espresso with foam</p>
                        </div>
                        </li>

                        <li>
                        <div>
                            <img className='list-icon' src={Latte} alt="Cafe Latte Icon"
                            onMouseEnter={() => handleMouseEnter(1)}
                            onMouseLeave={() => handleMouseLeave(1)}
                            style={{ padding: hoverStates[1].isHovered ? '10px' : '0px', transition: 'padding 0.3s ease' }}
                            />
                        </div>
                        <div className="quality-text">
                            <h3>Cafe latte</h3>
                            <p>Creamy espresso with steamed milk.</p>
                        </div>
                        </li>

                        <li>
                        <div>
                        <img className='list-icon' src={DarkCoffee} alt="Dark Coffee Icon" 
                        onMouseEnter={() => handleMouseEnter(2)}
                        onMouseLeave={() => handleMouseLeave(2)}
                        style={{ padding: hoverStates[2].isHovered ? '10px' : '0px', transition: 'padding 0.3s ease' }}
                        />
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
                             <img className='list-icon' src={TurkishCoffee} alt="Turkish Coffee Icon" 
                             onMouseEnter={() => handleMouseEnter(3)}
                             onMouseLeave={() => handleMouseLeave(3)}
                             style={{ padding: hoverStates[3].isHovered ? '10px' : '0px', transition: 'padding 0.3s ease' }}
                             />
                        </div>
                        </li>

                        <li>
                        <div className="quality-text">
                            <h3>Pancakes</h3>
                            <p>Fluffy, golden, sweet breakfast treat.</p>
                        </div>
                        <div>
                             <img className='list-icon' src={Pancakes} alt="pancakes" 
                             onMouseEnter={() => handleMouseEnter(4)}
                             onMouseLeave={() => handleMouseLeave(4)}
                             style={{ padding: hoverStates[4].isHovered ? '10px' : '0px', transition: 'padding 0.3s ease' }}
                             />
                        </div>
                        </li>

                        <li>
                        <div className="quality-text">
                            <h3>Coffee Bag</h3>
                            <p>Convenient, portable, ground coffee pouch.</p>
                        </div>
                        <div>
                            <img className='list-icon' src={CoffeeBag} alt="coffee bag" 
                            onMouseEnter={() => handleMouseEnter(5)}
                            onMouseLeave={() => handleMouseLeave(5)}
                            style={{ padding: hoverStates[5].isHovered ? '10px' : '0px', transition: 'padding 0.3s ease' }}
                            />
                        </div>
                        </li>
                    </ul>
                    </div>
                </section>
            </section>
        </div>
    )
}
