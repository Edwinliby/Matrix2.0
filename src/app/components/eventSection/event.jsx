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
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium illo aut odit nulla iure minima pariatur laboriosam ducimus error omnis, impedit quibusdam commodi tenetur deserunt saepe laudantium modi delectus? Accusantium.'
    },
    {
        img: candle,
        alt: 'candle night dinner',
        name: 'Candle Night Dinner',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium illo aut odit nulla iure minima pariatur laboriosam ducimus error omnis, impedit quibusdam commodi tenetur deserunt saepe laudantium modi delectus? Accusantium.'
    },
    {
        img: campfire,
        alt: 'Camp fire night',
        name: 'Camp fire night',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium illo aut odit nulla iure minima pariatur laboriosam ducimus error omnis, impedit quibusdam commodi tenetur deserunt saepe laudantium modi delectus? Accusantium.'
    },
    {
        img: fusion,
        alt: 'Music Fusion Night',
        name: 'Music Fusion Night',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium illo aut odit nulla iure minima pariatur laboriosam ducimus error omnis, impedit quibusdam commodi tenetur deserunt saepe laudantium modi delectus? Accusantium.'
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
