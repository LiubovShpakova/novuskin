import Conteiner from '../Conteiner/Conteiner'
import styles from './NovuskinFooter.module.css'
import logonovuskin_white from '../../res/images/logonovuskin_white.png'
import socNetwork from '../../res/images/SocNetwork/articles'
import aboutTreatments from './about'
import { v4 as uuidv4 } from 'uuid'

export default function NovuskinFooter() {
  return (
    <>
      <section className={styles.footer}>
        {' '}
        <Conteiner>
          <div className={styles.footer_box}>
            <div className={styles.footer_logo}>
              <img
                src={logonovuskin_white}
                alt="logonovuskin_white"
                className={styles.footer_img}
              />
            </div>
            <ul className={styles.footer_socialnetworks}>
              {socNetwork.map((e, i) => (
                <li key={i} className={styles.footer_socialnetworks_item}>
                  <img src={e.image} alt={e.name} />
                </li>
              ))}
            </ul>
            <ul className={styles.footer_info}>
              {aboutTreatments.map(e => (
                <li key={uuidv4()} className={styles.footer_info_title}>
                  {e.title}
                  <ul className={styles.footer_info_item_box}>
                    <li className={styles.footer_info_item_text}>{e.text1}</li>
                    <li className={styles.footer_info_item_text}>{e.text2}</li>
                    <li className={styles.footer_info_item_text}>{e.text3}</li>
                    <li className={styles.footer_info_item_text}>{e.text4}</li>
                  </ul>
                </li>
              ))}
              <li className={styles.footer_info_title}>
                Our Doctors
                <ul className={styles.footer_info_item_box}>
                  <li className={styles.footer_info_item_textUp}>About us</li>
                  <li className={styles.footer_info_item_textUp}>Shop</li>
                </ul>
              </li>
              <li className={styles.footer_info_block}>
                <div className={styles.footer_info_block_cons}>
                  <h3 className={styles.footer_info_block_cons_title}>
                    Complementary Consultation
                  </h3>
                  <p className={styles.footer_info_block_cons_text}>
                    Curious about which treatment <br /> is right for you?
                  </p>
                  <button
                    type="button"
                    className={styles.footer_info_block_cons_btn}
                  >
                    Book now
                  </button>
                </div>
                <form className={styles.footer_info_block_cons_form}>
                  <label className={styles.footer_info_block_cons_form_label}>
                    Joing our community
                    <div className={styles.footer_info_block_cons_form_box}>
                      <input
                        className={styles.footer_info_block_cons_form_input}
                        type="email"
                        name="email"
                        placeholder="Email address"
                      />
                      <button
                        className={styles.footer_info_block_cons_form_btn}
                        type="submit"
                      >
                        Subscribe
                      </button>
                    </div>
                  </label>
                </form>
              </li>
            </ul>
            <div className={styles.footer_navproducts}>
              <div className={styles.footer_nav_block}>
                2021 Novuskin© All rights reserv
              </div>
              <div className={styles.footer_nav_block}>I</div>
              <div className={styles.footer_nav_block}>Privacy Policy</div>
            </div>
          </div>
        </Conteiner>
      </section>
    </>
  )
}
