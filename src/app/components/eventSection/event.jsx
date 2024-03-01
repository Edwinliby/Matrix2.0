import Image from 'next/image';
import styles from './event.module.css';
import candle from '../../../../public/candle.webp'
import python from '../../../../public/python.webp'
import fusion from '../../../../public/fusion.webp'
import campfire from '../../../../public/campfire.webp'

const cardData = [
    {
        img: python,
        alt: 'Python Workshop',
        name: 'Python Workshop',
        description: 'Learn about the latest python libraries and how to use them in your projects. This workshop will be conducted by our in-house python experts. Join us and learn the best practices of python programming.'
    },
    {
        img: candle,
        alt: 'candle night dinner',
        name: 'Candle Night Dinner',
        description: 'Treat yourself to a romatic candle light dinner with your loved ones. Enjoy the delicious food and soothing music. Make your night memorable with us.'
    },
    {
        img: campfire,
        alt: 'Bonfire night',
        name: 'Camp fire night',
        description: 'Join us for the night under the stars with a campfire. Enjoy the music, food and the warmth of the fire. Make your night memorable with us.'
    },
    {
        img: fusion,
        alt: 'Music Fusion Night',
        name: 'Music Fusion Night',
        description: 'Experience the music fusion of different genres. Enjoy the live performances of our talented artists. Join us and make your night memorable.'
    }
]

export default function EventSection() {
    return (
        <div className={styles.eventSection}>
            <h1>EVENTS</h1>
            {
                cardData.map((card, index) => {
                    return (
                        <div key={index} className={styles.eventCard}>
                            <Image
                                src={card.img} alt={card.alt}
                                width={500}
                                height={500}
                                className={styles.cardImg}
                            />
                            <div className={styles.cardContent}>
                                <b>{card.name}</b>
                                <p>{card.description}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
