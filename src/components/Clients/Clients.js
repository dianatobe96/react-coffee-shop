import "./Clients.css";
import { useEffect, useState } from 'react';
import Card from "../Card/Card";
import client1 from "../../assets/images/client1.png"
import client2 from "../../assets/images/client2.png"
import client3 from "../../assets/images/client3.png"
import client4 from "../../assets/images/client4.png"
import client5 from "../../assets/images/client5.png"
import client6 from "../../assets/images/client6.png"

export default function Clients(props) {
    const { imageDirection = "row" } = props;

    const [imagesView, setImagesView] = useState({ flexDirection: "row" });

    useEffect(() => {
        setImagesView({
            flexDirection: imageDirection 
        });
    }, [imageDirection]);
    return (
        <div className="container">
            <h5 className="textclient2">Partners & Clients</h5>
            <h2 className="textclients">We work with the best people</h2>

                <div className="cardclients" style={{ ...imagesView }}>
                <Card image={{ url: client1, width: 9, height: 5 }} title="" subtitle="" align='left' />
                <Card image={{ url: client2, width: 7, height: 6 }} title="" subtitle="" align='left' />
                <Card image={{ url: client3, width: 7, height: 6 }} title="" subtitle="" align='left' />
                <Card image={{ url: client4, width: 7, height: 6 }} title="" subtitle="" align='left' />
                <Card image={{ url: client5, width: 7, height: 6 }} title="" subtitle="" align='left' />
                <Card image={{ url: client6, width: 7, height: 6 }} title="" subtitle="" align='left' />
                </div>
            </div>
    )
}
