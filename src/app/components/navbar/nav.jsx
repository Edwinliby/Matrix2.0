'use client'
import { useState, useEffect } from 'react';
import styles from './nav.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { IoClose } from "react-icons/io5";
import gsap from 'gsap';

export default function Nav() {
    const [showPopup, setShowPopup] = useState(false);

    const openPopup = () => {
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    useEffect(() => {
        gsap.from('.nav-container', { y: -100, opacity: 0, duration: 1, delay: .5, ease: 'power3.out' });
        gsap.to('.nav-container', { y: 0, opacity: 1, duration: 1, delay: .5, ease: 'power3.out' });
    }, []);

    return (
        <header className={`${styles.head} nav-container`}>
            <Link href='/'>
                <Image
                    src='/icon.webp'
                    alt='trix'
                    width={200}
                    height={200}
                    className={styles.logo}
                />
            </Link>
            <nav>
                <ul>
                    <li><Link href="#about">About</Link></li>
                    <li><Link href="/gallery">gallery</Link></li>
                    <li><Link href="#faq">Faq</Link></li>
                    <li><Link href="#contact">Contact</Link></li>
                    <li className={styles.reg}><a href="https://forms.gle/a2ei82HbsLdqxWJ66" target='_blank' >Register</a></li>
                </ul>
            </nav>

            {showPopup && (
                <div className={styles.popupOverlay}>
                    <div className={styles.popupContent}>
                        <button className={styles.closeButton} onClick={closePopup}>
                            <IoClose />
                        </button>
                        <iframe
                            width="560"
                            height="315"
                            src="https://docs.google.com/forms/d/e/1FAIpQLSfGClGADvDwNmWPZR4chZai9hTqaC_Nrsf5eZ3FyunM0Jylng/viewform"
                            allowFullScreen
                            title="Registration"
                            className={styles.yepDesk}
                        ></iframe>
                    </div>
                </div>
            )}
        </header>
    );
}
