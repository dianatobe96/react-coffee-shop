import { ReactElement } from 'react';
import './Card.css';

/**
 * @param {{ 
 *  image: { 
 *      url: string,
 *      width?: number,
 *      height?: number
 *  },
 *  title: string,
 *  subtitle: string,
 *  align?: string,
 * }} props - Image width and height must be a number in 'em' css unit 
 * @returns {ReactElement} article element with a card class
 */
export default function Card(props) {
    const { image, title, subtitle, align = 'center' } = props;

    const imageStyle = {
        width: `${image.width ?? 10}em`,
        height: `${image.height ?? 10}em`,
    };

    return (
        <article className="card">
            <header className='card-header'>
                <img src={image.url} style={imageStyle} />
            </header>

            <div className='card-body' style={{ textAlign: align }}>
                <h5 className="title">{title}</h5>
                <h6 className="subtitle">{subtitle}</h6>
            </div>
        </article>
    )
}
