import Conteiner from '../Conteiner/Conteiner'
import styles from './Header.module.css'

export default function Header({ onOpenModal }) {
  return (
    <Conteiner>
      <div className={styles.header_nav}>
        <div className={styles.header_nav_block}>
          <button type="button" className={styles.header_button}>
            BEAUTYBLOG
          </button>
          <a href="./index.html" className={styles.header_linkteam}>
            MEDICAL TEAM
          </a>
        </div>
        <div className={styles.header_logo}></div>
        <div className={styles.header_nav_block}>
          <button type="button" className={styles.header_buttonblack}>
            Book now
          </button>
          <button
            type="button"
            className={styles.header_button_login}
            onClick={() => onOpenModal()}
          >
            login
          </button>
        </div>
      </div>
      <div className={styles.header_navproducts}>
        <div className={styles.header_nav_block}>
          <a href="#treatments" className={styles.header_linkproducts}>
            Treatments
          </a>
          <a href="#results" className={styles.header_linkproducts}>
            Results
          </a>
          <a href="./index.html" className={styles.header_linkproducts}>
            Our team
          </a>
        </div>
        <div className={styles.burger_menu}></div>
        <div className={styles.header_nav_block}>
          <a href="./index.html" className={styles.header_linkproducts}>
            Shop
          </a>
          <a href="./index.html" className={styles.header_linkproducts}>
            Membership
          </a>
          <div className={styles.search}>
            <form className={styles.search_form}>
              <input
                type="text"
                placeholder="Search"
                className={styles.search_input}
              ></input>
              <button type="submit" className={styles.search_button}></button>
            </form>
          </div>
        </div>
      </div>
    </Conteiner>
  )
}
