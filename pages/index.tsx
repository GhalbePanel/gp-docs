import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GhalbePanel Document V1</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://github.com/GhalbePanel">GhalbePanel</a> Document
        </h1>

        <p className={styles.description}>
          In this document you will learn how to work and start with <a href='#'>GhalbePanel</a>.
        </p>

        <div className={styles.grid}>
          <Link legacyBehavior href={"/v1/gettingstarted"}>
          <a className={styles.card}>
            <h2>Getting Started &rarr;</h2>
            <p>Start building your panel with GhalbePanel, today with easy learning!</p>
          </a></Link>

          <a href="https://github.com/GhalbePanel/GhalbePanel" className={styles.card}>
            <h2>GitHub &rarr;</h2>
            <p>This project is 100% open source, its avaible on github, for everyone!</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
          Template by{' '}
          <span className={styles.logo}>
          <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </a>
          </span>
          &rarr; and other copyrights for GhalbePanel
      </footer>
    </div>
  )
}
