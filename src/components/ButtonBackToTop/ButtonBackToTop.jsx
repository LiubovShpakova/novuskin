import { useState, useEffect } from 'react'

import styles from './ButtonBackToTop.module.css'

export default function ButtonBackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
     
    <button
      type="button"
      onClick={scrollToTop}
      className={isVisible ? styles.back_to_top : styles.back_to_top_notHidden}
    ></button>
  )
}
