import styles from './contact.module.css';

export default function ContactSection() {
    return (
        <div className={styles.contact} id='contact'>
            <div className={styles.number}>
                <h1>Contact Us :</h1>
                <span>
                    <a href="tel:9354367826"><b>Melvin:</b> 9354367826</a>
                    <a href="tel:9633179406"><b>Lezin:</b> 9633179406</a>
                </span>
            </div>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15748.497759727323!2d76.6834358!3d9.3222405!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b063d0921e18ea9%3A0xa09306d585c4d1f4!2sCollege%20of%20Engineering%2C%20Aranmula!5e0!3m2!1sen!2sin!4v1681328442930!5m2!1sen!2sin"
                width="100%"
                height="400"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={styles.map}
            ></iframe>
        </div>
    )
}
