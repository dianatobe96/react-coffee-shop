import Card from "../Card/Card";
import photo2 from '../../assets/images/photo2.jpg';


export default function Menu() {
    return (
        <div>
             <Card image={{ url: photo2, width: 15, height: 15 }} title="Bulbul Hassan" subtitle="Chef" align='left' />
        </div>
    )
}


