import Conteiner from '../Conteiner/Conteiner'
import styles from './Hero.module.css'

export default function Hero({ onOpenModal }) {
  return (
    <Conteiner>
      <section className={styles.hero_banner}>
        <div className={styles.hero_text}>
          <h2 className={styles.hero_title}>Welcome to</h2>
          <h1 className={styles.hero_title_bold}>Novuskin Med Spa</h1>
          <button
            className={styles.hero_button}
            type="submit"
            onClick={() => onOpenModal()}
          >
            sign up
          </button>
        </div>
        <div className={styles.hero_text_bottom}>
          <h3 className={styles.hero_title_bottom}>Las Vegas</h3>
          <h3 className={styles.hero_title_bottom}>Denver</h3>
        </div>
      </section>
      <section className={styles.hero_medspa}>
        <div className={styles.hero_medspa_girl}>
          <div className={styles.hero_medspa_girlbox}>
            <h3 className={styles.hero_medspa_girltitle}>Novuskin Med Spa</h3>
            <p className={styles.hero_medspa_girltext}>
              Novuskin Med Spa provides new customized aesthetic procedures and
              medical grade skin care products to optimize your appearance with
              a focus on excellence in physician-led skin care and hCG Medical
              Weight Loss. We offer non-surgical facial rejuvenation and
              customized weight management to fit your budget and lifestyle. You
              should never refer to Novuskin Med Spa as “just a medspa.” We are
              so much more.
            </p>
            <button
              className={styles.hero_button}
              type="submit"
              onClick={() => onOpenModal()}
            >
              sign up
            </button>
          </div>
        </div>
        <div className={styles.hero_medspa_text}>
          <h3 className={styles.hero_medspa_texttitle}>
            complimentary consultation
          </h3>
          <h4 className={styles.hero_medspa_textparag}>
            Curious about which treatment is right for you?
          </h4>
          <button type="button" className={styles.hero_medspa_buttonblack}>
            Book now
          </button>
        </div>
      </section>
    </Conteiner>
  )
}
