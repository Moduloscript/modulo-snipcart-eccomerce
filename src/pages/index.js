import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import Header from '../components/index';
import Container from '../components/index';
import Button from '../components/Button/index'

import styles from '../styles/Home.module.scss'
import products from '../data/products.json'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <h1> Modulo Auto Store </h1>
        <h2 >Avaliable Cards</h2>
        <ul className={styles.products}>
          {products.map(product => {
            return (
              <li key={product.id}>
            <Image width={864} height={1200} src={product.image} alt='car imagery' />
                <h3 className={styles.productTitle}>{ product.title }</h3>
                <p className={styles.price}>{ product.price}</p>
                <p><Button 
                className="snipcart-add-item"
                data-item-id={product.id}
                data-item-price={product.price}
                data-item-description="/"
                data-item-image={product.image}
                data-item-name={product.title}
                >
                Add To Cart
                </Button>
                
                </p>
          </li>
            )
          })}
        </ul>
      </main>
      <footer className={styles.footer}>
       &copy;Modulo store  {new Date().getFullYear()}
      </footer>
      </div>
  )
}
