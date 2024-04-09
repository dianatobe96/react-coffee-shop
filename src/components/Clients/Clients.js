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
        <div>
            <h1>Clients</h1>
            <Card image={{ url: client1, width: 15, height: 15 }} title="" subtitle="" align='left' />
            <Card image={{ url: client2, width: 15, height: 15 }} title="" subtitle="" align='left' />
            <Card image={{ url: client3, width: 15, height: 15 }} title="" subtitle="" align='left' />
            <Card image={{ url: client4, width: 15, height: 15 }} title="" subtitle="" align='left' />
            <Card image={{ url: client5, width: 15, height: 15 }} title="" subtitle="" align='left' />
            <Card image={{ url: client6, width: 15, height: 15 }} title="" subtitle="" align='left' />
            </div>
    )
}
