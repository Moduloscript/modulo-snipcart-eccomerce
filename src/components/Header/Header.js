import { FaShoppingCart }  from 'react-icons/fa'
import Container from '../container/index'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
      <p className={styles.headerTitle}>Modulo&apos;s Store</p>
        <p className={styles.headerCart}>
          <button className='snipcart-checkout'>
            <FaShoppingCart />
           <span className='snipcart-total-price'> $0.00</span>
            </button>
        </p>
      </Container>
      </header>
  )
}

export default Header