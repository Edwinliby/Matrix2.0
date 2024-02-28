import Image from 'next/image'
import styles from './faq.module.css'

const questions = [
    {
        question: 'How do I get started?',
        answer: 'Just give us 10000 and we call you on 2025'
    },
    {
        question: 'What is the minimum qualification to participate?',
        answer: 'Must have a brain and a RTX 5090'
    },
    {
        question: 'Will i get certificate after completion?',
        answer: 'Of course, you will not get a certificate of participation'
    },
    {
        question: 'Will I get a life after this?',
        answer: 'No, you will be a zombie after this'
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
