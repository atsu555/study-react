import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { Footer } from '@/components/Footer';
import { Main } from '@/components/Main';
import { Header } from '@/components/Header';
import { useCallback } from 'react';

export default function Home() {
  const handleClick = useCallback((e) => {
    console.log(e.target);
    e.preventDefault();
    alert("11")
  }, [])
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>IndexPage</title>
        </Head>
        <Header />
        <button onClick={handleClick}>ボタン</button>

        <Main page="index"/>

        <Footer />
      </div>
    </>
  )
}
