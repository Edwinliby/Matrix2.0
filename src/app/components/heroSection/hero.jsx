'use client'
import { useEffect } from 'react';
import { IoClose } from "react-icons/io5";
import styles from './hero.module.css';
import gsap from 'gsap';

export default function hero() {

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

          <div className={styles.date}>
            <h3>March 2024</h3>
            <div className={styles.dates}>
              <span>15th</span>
              <span>16th</span>
              <span>17th</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
