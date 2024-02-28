import styles from './about.module.css'
import Image from 'next/image'

const imgData = [
    {
        src: '/images/1.webp',
        alt: 'one'
    },
    {
        src: '/images/2.webp',
        alt: 'two'
    },
    {
        src: '/images/3.webp',
        alt: 'three'
    },
    {
        src: '/images/4.webp',
        alt: 'four'
    },
    {
        src: '/images/5.webp',
        alt: 'five'
    },
    {
        src: '/images/6.webp',
        alt: 'six'
    },
    {
        src: '/images/7.webp',
        alt: 'seven'
    },
    {
        src: '/images/8.webp',
        alt: 'eight'
    },
    {
        src: '/images/9.webp',
        alt: 'nine'
    },
    {
        src: '/images/10.webp',
        alt: 'ten'
    },
    {
        src: '/images/11.webp',
        alt: 'eleven'
    },
    {
        src: '/images/12.webp',
        alt: 'twelve'
    }
]

export default function about() {
    return (
        <div className={styles.about} id='about'>
            <div className={styles.aboutHead}>
                <span>
                    <p>Want to know about</p>
                    <h1>MATRIX</h1>
                </span>
                <Image
                    src="/bullet stop.gif"
                    width={500}
                    height={500}
                    className={styles.aboutImage}
                />
            </div>

            <div className={styles.aboutContent}>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>

            <div className={styles.prev}>
                <h1>Previously ...</h1>
                <div className={styles.prevImages}>
                    {imgData.map((img, index) => (
                        <Image
                            key={index}
                            src={img.src}
                            alt={img.alt}
                            width={500}
                            height={500}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
