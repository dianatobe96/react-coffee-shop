import "./Menu.css";
import Card from "../Card/Card";
import photo6 from '../../assets/images/photo6.jpg';
import photo7 from '../../assets/images/photo7.jpg';
import photo8 from '../../assets/images/photo8.jpg';
import cinnamon  from '../../assets/images/cinnamon-cappuccino.jpg'
import photo10 from '../../assets/images/photo10.jpg';
import photo11 from '../../assets/images/photo11.jpg';
import photo12 from '../../assets/images/photo12.jpg';
import photo1313 from '../../assets/images/photo1313.jpg';


export default function Menu() {
    return (
        <div>
            <h1>Our favorites Menu</h1>
            <Card image={{ url: photo6, width: 15, height: 15 }} title="Coffee beans from Colombia" subtitle="$39" align='left' />
             <Card image={{ url: photo7, width: 15, height: 15 }} title="Coffee beans" subtitle="$30" align='left' />
             <Card image={{ url: photo8, width: 15, height: 15 }} title="Latte" subtitle="$5" align='left' />
             <Card image={{ url: cinnamon, width: 15, height: 15 }} title="Cinnamon Cappuccino" subtitle="$7" align='left' />
             <Card image={{ url: photo10, width: 15, height: 15 }} title="Coffee beans" subtitle="$30" align='left' />
             <Card image={{ url: photo11, width: 15, height: 15 }} title="Coffee beans" subtitle="$30" align='left' />
             <Card image={{ url: photo12, width: 15, height: 15 }} title="Iced latte" subtitle="$7" align='left' />
             <Card image={{ url: photo1313, width: 15, height: 15 }} title="Macchiato" subtitle="$8" align='left' />
        </div>
    )
}


