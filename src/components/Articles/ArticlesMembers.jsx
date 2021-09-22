import React, { useState } from 'react'
import Slider from 'react-slick'
import Conteiner from '../Conteiner/Conteiner'
import { v4 as uuidv4 } from 'uuid'
import styles from './ArticlesMembers.module.css'
import imagesArticles from '../../res/images/articles'
import dermafraclogo from '../../res/images/dermafrac.png'
import vasershapelogo from '../../res/images/vaser_shape.png'
import cynosurelogo from '../../res/images/cynosure.png'

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  )
}
function ReadMore({ children, maxCount = 100 }) {
  const text = children
  const [isTrun, setIsTrun] = useState(true)
  const resultString = isTrun ? text.slice(0, maxCount) : text
  function toggle() {
    setIsTrun(!isTrun)
  }

  return (
    <p className={styles.articles_slider_text}>
      {resultString}
      <button className={styles.articles_slider_button} onClick={toggle}>
        {isTrun ? 'Read More' : 'Read Less'}
        {isTrun ? (
          <div className={styles.articles_slider_arrow}></div>
        ) : (
          <div className={styles.articles_slider_arrow_less}></div>
        )}
      </button>
    </p>
  )
}

export default function Articles(props) {
  const settings = {
    dots: false,
    infinite: true,
    cssEase: 'ease',
    // autoplay: true,
    // autoplaySpeed: 1000,
    speed: 2500,
    slidesToScroll: 4,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ],
    mobileFirst: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <>
      <Conteiner key={uuidv4()}>
        <section className={styles.articles_box} id="articles">
          <h2 className={styles.articles_title}>Helpful articles</h2>
          <div className={styles.articles_slider}>
            <Slider {...settings}>
              {imagesArticles.map((e, i) => (
                <div className={styles.articles_slider_item} key={i}>
                  <img
                    className={styles.articles_img}
                    src={e.image}
                    alt={e.title}
                  />
                  <h3 className={styles.articles_slider_title}>{e.title}</h3>
                  <ReadMore maxCount={100} key={uuidv4()}>
                    {e.text}
                  </ReadMore>
                </div>
              ))}
            </Slider>
          </div>
        </section>
      </Conteiner>
      <section className={styles.logotype} key={uuidv4()}>
        <Conteiner>
          <div className={styles.logotype_box}>
            <img
              src={dermafraclogo}
              alt="dermafraclogo"
              className={styles.logotype_img}
            />
            <img
              src={vasershapelogo}
              alt="vasershapelogo"
              className={styles.logotype_img}
            />
            <img
              src={cynosurelogo}
              alt="cynosurelogo"
              className={styles.logotype_img}
            />
            <img
              src={vasershapelogo}
              alt="vasershapelogo"
              className={styles.logotype_img}
            />
          </div>
        </Conteiner>
      </section>
      <Conteiner key={uuidv4()}>
        <section className={styles.members}>
          <div className={styles.members_box}>
            <h2 className={styles.members_title}>Member Club</h2>
            <div className={styles.members_logo}></div>
          </div>
          <div className={styles.members_box_line}></div>
          <div className={styles.members_box_text}>
            Love Novuskin? <br />
            Join our Member Club to receive monthly perks.
            <br /> It’s your first step to looking and feeling your best…always!
          </div>
          <div className={styles.members_box}>
            <button className={styles.members_button} type="submit">
              Join the club
            </button>
          </div>
        </section>
      </Conteiner>
    </>
  )
}
