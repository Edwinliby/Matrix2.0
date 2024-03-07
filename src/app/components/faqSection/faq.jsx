import Image from 'next/image'
import styles from './faq.module.css'

const questions = [
    {
        question: 'What will be taught?',
        answer: 'Beginner to advanced python with AI project'
    },
    {
        question: 'Will there be food and accommodation?',
        answer: 'Yes, there will be all provided'
    },
    {
        question: 'Will i get certificate for completion?',
        answer: 'Of course, you will get a certificate'
    },
    {
        question: 'Will i get activity points?',
        answer: '20 activity points proposed'
    }
]

export default function FaqSection() {
    return (
        <div className={styles.faqSection} id='faq'>
            <div className={styles.faqHead}>
                <h1>FAQ</h1>
                <Image
                    src="/faq.gif"
                    alt="faq"
                    width={800}
                    height={600}
                    className={styles.faqImg}
                />
            </div>

            <div className={styles.questionConatiner}>
                {questions.map((question, index) => (
                    <details key={index} className={styles.question}>
                        <summary>{question.question}</summary>
                        <p>{question.answer}</p>
                    </details>
                ))}
            </div>
        </div>
    )
}
