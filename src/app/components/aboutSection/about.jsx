import styles from './about.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { GiClick } from "react-icons/gi";

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
                    Embark on a tech journey with IDEAMIRROR's <span>Matrix Workshp</span>, exploring Python's pivotal role in Robotics
                    and program development. Over three days, discover Python's versatility in seamlessly integrating with robotic
                    frameworks and crafting innovative applications. With a promising trajectory, Python stands as a key player in
                    shaping the future of program development.Join us at <span>Matrix</span> to unlock Python's potential in the evolving
                    landscape of technology and app development.
                </p>
            </div>

            <div className={styles.prev}>
                <Link href="/gallery"><h1>Previously ... <GiClick /> </h1></Link>

                <div className={styles.eventPartnersContainer}>
                    <div className={styles.eventPartners}>
                        <img className={styles.logos} src='/images/1.webp' alt='' />
                        <img className={styles.logos} src='/images/2.webp' alt='' />
                        <img className={styles.logos} src='/images/3.webp' alt='' />
                        <img className={styles.logos} src='/images/4.webp' alt='' />
                        <img className={styles.logos} src='/images/5.webp' alt='' />
                        <img className={styles.logos} src='/images/6.webp' alt='' />
                    </div>
                    <div className={styles.eventPartners}>
                        <img className={styles.logos} src='/images/1.webp' alt='' />
                        <img className={styles.logos} src='/images/2.webp' alt='' />
                        <img className={styles.logos} src='/images/3.webp' alt='' />
                        <img className={styles.logos} src='/images/4.webp' alt='' />
                        <img className={styles.logos} src='/images/5.webp' alt='' />
                        <img className={styles.logos} src='/images/6.webp' alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}
