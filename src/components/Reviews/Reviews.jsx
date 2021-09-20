import Slider from 'react-slick'
import { v4 as uuidv4 } from 'uuid'
import Conteiner from '../Conteiner/Conteiner'
import styles from './Reviews.module.css'
import star from '../../res/images/icons/star-full.svg'
import quotes from '../../res/images/icons/quotes.svg'
import customerReviews from '../../res/images/customer-reviews'

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'none', background: 'red' }}
      onClick={onClick}
    />
  )
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'none' }}
      onClick={onClick}
    />
  )
}
export default function Reviews() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    fade: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  const getStarts = numberstar => {
    let content = []
    for (let i = 0; i < numberstar; i++) {
      content.push(
        <li className={styles.reviews_star_item} key={uuidv4()}>
          <img className={styles.reviews_star_img} src={star} alt="star" />
        </li>,
      )
    }
    return content
  }
  return (
    <>
      <section className={styles.reviews_box} id="reviews">
        {' '}
        <Conteiner>
          <h2 className={styles.reviews_title_show}>Reviews</h2>
          <div className={styles.reviews_slider}>
            <Slider {...settings}>
              {customerReviews.map((e, i) => (
                <div className={styles.reviews_slider_item} key={i}>
                  <h2 className={styles.reviews_title}>Reviews</h2>
                  <div className={styles.reviews_block}>
                    <img
                      className={styles.reviews_quoters}
                      src={quotes}
                      alt="quotes"
                    />
                    <p className={styles.reviews_slider_text}>{e.text}</p>
                    <div className={styles.reviews_box_name}>
                      <img
                        className={styles.reviews_img}
                        src={e.image}
                        alt={e.text}
                      />
                      <div className={styles.reviews_box_stars}>
                        <ul className={styles.reviews_star}>
                          {getStarts(e.stars)}
                        </ul>
                        <h3 className={styles.reviews_slider_autor}>
                          {e.autor}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </Conteiner>
      </section>
    </>
  )
}
