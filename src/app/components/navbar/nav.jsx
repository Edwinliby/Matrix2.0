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
                    <li><a href="#about">About</a></li>
                    <li><a href="#faq">Faq</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li className={styles.reg}><a href="#" onClick={openPopup}>Register</a></li>
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
                            src="https://www.yepdesk.com/embed/matrix-2-01"
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
