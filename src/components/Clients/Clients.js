import "./Clients.css";
import Card from "../Card/Card";
import client1 from "../../assets/images/client1.png"
import client2 from "../../assets/images/client2.png"
import client3 from "../../assets/images/client3.png"
import client4 from "../../assets/images/client4.png"
import client5 from "../../assets/images/client5.png"
import client6 from "../../assets/images/client6.png"

export default function Clients() {
    return (
        <div className="container">
            <h5 className="textclient2">Partners & Clients</h5>
            <h2 className="textclients">We work with the best people</h2>

                <div className="cardclients">
                <Card image={{ url: client1, width: 18, height: 10 }} title="" subtitle="" align='left' />
                <Card image={{ url: client2, width: 12, height: 10 }} title="" subtitle="" align='left' />
                <Card image={{ url: client3, width: 12, height: 10 }} title="" subtitle="" align='left' />
                <Card image={{ url: client4, width: 12, height: 10 }} title="" subtitle="" align='left' />
                <Card image={{ url: client5, width: 12, height: 10 }} title="" subtitle="" align='left' />
                <Card image={{ url: client6, width: 12, height: 10 }} title="" subtitle="" align='left' />
                </div>
            </div>
    )
}
