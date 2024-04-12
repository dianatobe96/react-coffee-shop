import './About.css';
import coffeeImg1 from '../../assets/images/photo3.jpg';
import coffeeImg2 from '../../assets/images/photo2.jpg';
import coffeeIcon from '../../assets/icons/iconcoffe.svg';
import ChefIcon from '../../assets/icons/iconchef.svg';
import PromoIcon from '../../assets/icons/iconpromo.svg';
import CoffeRight from '../../assets/images/photo5.jpg';

export default function About() {
    return (
        <div className='hasmargin'>
            <section id="about" className="d-flex container">
                <div className="left-side">
                    <img className='img-front' src={coffeeImg1} alt="Cup of coffee" />
                    <img className='img-back' src={coffeeImg2} alt="Cup of coffee" />
                </div>
                <div className="right-side">
                    <h4>About us</h4>
                    <h2 className="title">We are the best quality Coffee maker</h2>
                    <p>
                        Step into our cozy coffee haven, where the aroma of freshly brewed
                        beans dances in the air,welcoming you to savor the perfect cup of
                        indulgence. Discover a sanctuary where every sip tells a story,and
                        every moment is a celebration of the rich tapestry of coffee
                        culture.
                    </p>

                    <ul className="list">
                        <li>Experienced Chefs</li>
                        <li>Fresh & Organic Foods</li>
                        <li>Different Coffee & Drinks</li>
                    </ul>
                </div>
            </section>

            <div className='hasmargin'>
                <section id="why-choose-us" className="d-flex container align-items-center">
                    <div className="left-side">
                        <h4>Why choose us</h4>
                        <h1 className="title">Best quality food and coffee maker</h1>

                        <p>
                            This coffee shop stands out for its exceptional brews, cozy
                            ambiance, and friendly service, making it the best choice for any
                            coffee lover.
                        </p>

                        <ul>
                            <li className="d-flex">
                                <div>
                                    <img className='list-icon' src={coffeeIcon} alt="Icon coffee" />
                                </div>
                                <div className="quality-text">
                                    <h2>High quality coffee</h2>
                                    <p>Rich, aromatic, smooth, premium, satisfying.</p>
                                </div>
                            </li>

                            <li className="d-flex">
                                <div>
                                    <img className='list-icon' src={ChefIcon} alt="Icon coffee" />
                                </div>
                                <div className="quality-text">
                                    <h2>Best chef & Team</h2>
                                    <p>Skilled, innovative, passionate, experienced, creative.</p>
                                </div>
                            </li>

                            <li className="d-flex">
                                <div>
                                    <img className='list-icon' src={PromoIcon} alt="Icon coffee" />
                                </div>
                                <div className="quality-text">
                                    <h2>Promo and deal</h2>
                                    <p>Discounts, deals, specials, loyalty rewards.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="right-side">
                        <img src={CoffeRight} alt="Icon coffee" />
                        <p>
                            "Coffee shops: a haven for caffeine, community, and relaxation
                            vibes."
                            <br />
                            Alen Barg
                        </p>
                    </div>
                </section>
            </div>
        </div>
    )
}
