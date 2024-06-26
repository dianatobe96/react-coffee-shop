import "./Team.css";
import { useEffect, useState } from 'react';
import Card from "../Card/Card";
import chef1 from "../../assets/images/chef1.jpg";
import chef2 from "../../assets/images/chef2.jpg";
import chef3 from "../../assets/images/chef3.jpg";
import chef4 from "../../assets/images/chef4.jpg";




export default function Team(props) {
    const { showImages = true } = props;

    const [imageVisible, setImageVisibility] = useState({ display: "flex" });

    useEffect(() => {
        setImageVisibility({
            display: showImages ? "flex":"none"
        });
    }, [showImages]);

    return (
        <div className="container">
            <h2 className="textteam">Meet our team</h2>


             
             <div className="cardteam" style={{ ...imageVisible }}>
             <Card image={{ url: chef1, width: 15, height: 15 }} title="Bulbul Hassan" subtitle="Chef" align='left' />
             <Card image={{ url: chef2, width: 15, height: 15 }} title="Lia Smith" subtitle="Founder" align='left' />
             <Card image={{ url: chef3, width: 15, height: 15 }} title="Michael Nur" subtitle="Specialist" align='left' />
             <Card image={{ url: chef4, width: 15, height: 15 }} title="Munna Kathy" subtitle="Owner" align='left' />
             </div>
        </div>
        )
    
  

}
