'use client'
import { useState, useEffect } from 'react';
import { IoClose } from "react-icons/io5";
import styles from './hero.module.css';
import gsap from 'gsap';

export default function hero() {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    gsap.from('.hero', { y: 100, opacity: 0, duration: 1, delay: 1.25, ease: 'power3.out' });
    gsap.to('.hero', { y: 0, opacity: 1, duration: 1, delay: 1.25, ease: 'power3.out' });
  }, []);

  return (
    <div className={`${styles.hero} hero`}>
      <div className={styles.mainContainer}>
        <h1>MATRIX <span>2.0</span></h1>
        <div className={styles.heroContainer}>
          <div className={styles.text}>
            <h2>3 Day workshop</h2>
            <p>WORKSHOP THAT YOU WISH YOU HAVE ATTENDED</p>
          </div>
          <button className={styles.btn} onClick={openPopup}>
            Register
          </button>
        </div>
      </div>

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
    </div>
  )
}
