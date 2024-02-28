import styles from './loader.module.css'

export default function loader() {
    return (
        <div className={styles.container}>
            <h1>matrix 2.0</h1>
            <div className={styles.wrapper}>
                <div className={styles.gradient1}></div>
                <div className={styles.gradient2}></div>
                <div className={styles.gradient3}></div>
                <div className={styles.gradient4}></div>
            </div>
        </div>
    );
}
