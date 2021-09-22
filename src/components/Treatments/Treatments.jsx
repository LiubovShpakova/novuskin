import React, { useState } from 'react'
import Slider from 'react-slick'
import Conteiner from '../Conteiner/Conteiner'
import { v4 as uuidv4 } from 'uuid'
import styles from './Treatments.module.css'
import imagesTreatments from '../../res/images/ourtreatments'

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
    <p className={styles.treatments_slider_text}>
      {resultString}
      <button className={styles.treatments_slider_button} onClick={toggle}>
        {isTrun ? 'Read More' : 'Read Less'}
        {isTrun ? (
          <div className={styles.treatments_slider_arrow}></div>
        ) : (
          <div className={styles.treatments_slider_arrow_less}></div>
        )}
      </button>
    </p>
  )
}

export default function Treatments(props) {
  const settings = {
    dots: false,
    infinite: true,
    cssEase: 'ease',
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
    continuousSliding: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <>
      <section className={styles.treatments_box} id="treatments">
        <Conteiner>
          <h2 className={styles.treatments_title}>OUR TREATMENTS</h2>
          <div className={styles.treatments_title_white}></div>
          <div className="treatments_slider">
            <Slider {...settings}>
              {imagesTreatments.map((e, i) => (
                <div className={styles.treatments_slider_item} key={i}>
                  <img
                    className={styles.treatments_img}
                    src={e.image}
                    alt={e.title}
                  />
                  <h3 className={styles.treatments_slider_title}>{e.title}</h3>
                  <ReadMore maxCount={100} key={uuidv4()}>
                    {e.text}
                  </ReadMore>
                </div>
              ))}
            </Slider>
          </div>
        </Conteiner>
      </section>
    </>
  )
}
