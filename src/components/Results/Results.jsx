import React, { useState } from 'react'
import Slider from 'react-slick'
import Conteiner from '../Conteiner/Conteiner'
import { v4 as uuidv4 } from 'uuid'
import styles from './Results.module.css'
import imagesResults from '../../res/images/results'

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
    <p className={styles.results_slider_text}>
      {resultString}
      <button className={styles.results_slider_button} onClick={toggle}>
        {isTrun ? 'Check all results' : 'Read Less'}
        {isTrun ? (
          <div className={styles.results_slider_arrow}></div>
        ) : (
          <div className={styles.results_slider_arrow_less}></div>
        )}
      </button>
    </p>
  )
}

export default function Results(props) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3.999999,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <Conteiner>
      <section className={styles.results_box} id="results">
        <h2 className={styles.results_title}>The results</h2>
        <h3 className={styles.results_title_members}>From our VIP Members</h3>
        <div className={styles.results_slider}>
          <Slider {...settings}>
            {imagesResults.map((e, i) => (
              <div className={styles.results_slider_item} key={i}>
                <div className={styles.results_imgBox}>
                  <img
                    className={styles.results_img}
                    src={e.image}
                    alt={e.title}
                  />
                  <p className={styles.results_imgTitleAfter}>after</p>
                  <img
                    className={styles.results_imgBefore}
                    src={e.imageBefore}
                    alt={e.titleBefore}
                  />
                  <p className={styles.results_imgTitleBefore}>before</p>
                </div>

                <h3 className={styles.results_slider_title}>{e.title}</h3>
                <ReadMore maxCount={100} key={uuidv4()}>
                  {e.text}
                </ReadMore>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </Conteiner>
  )
}
