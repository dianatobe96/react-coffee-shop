import "./Team.css";
import Card from "../Card/Card";
import chef1 from "../../assets/images/chef1.jpg";
import chef2 from "../../assets/images/chef2.jpg";
import chef3 from "../../assets/images/chef3.jpg";
import chef4 from "../../assets/images/chef4.jpg";


export default function Team() {
    return (
        <div className="container">
            <h2 className="textteam">Meet our team</h2>
             
             <div className="cardteam">
             <Card image={{ url: chef1, width: 15, height: 15 }} title="Bulbul Hassan" subtitle="Chef" align='left' />
             <Card image={{ url: chef2, width: 15, height: 15 }} title="Lia Smith" subtitle="Founder" align='left' />
             <Card image={{ url: chef3, width: 15, height: 15 }} title="Michael Nur" subtitle="Specialist" align='left' />
             <Card image={{ url: chef4, width: 15, height: 15 }} title="Munna Kathy" subtitle="Owner" align='left' />
             </div>
        </div>
        )
    
  

}
