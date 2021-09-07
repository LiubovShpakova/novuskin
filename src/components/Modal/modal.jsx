import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { v4 as uuidv4 } from 'uuid'
import styles from './modal.module.css'

const modalRoot = document.querySelector('#modal-root')

export default function Modal({ onClose }) {
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  const handleChange = event => {
    const { name, value } = event.target
    switch (name) {
      case 'email':
        setEmail(value)
        break
      case 'phone':
        setTel(value)
        break
      default:
        return
    }
  }
  const emailInputId = uuidv4()
  const telInputId = uuidv4()

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose()
    }
  }

  const handleSave = ({ email, tel }) => {
    if (!email || !tel) {
      return
    }
    setEmail(email)
    setTel(tel)
    onClose(false)
  }

  const handleSubmit = event => {
    event.preventDefault()

    setEmail('')
    setTel('')
  }

  return createPortal(
    <div className={styles.Overlay} onClick={e => handleBackdropClick(e)}>
      <div className={styles.form__modal}>
        <button
          type="button"
          onClick={() => onClose(false)}
          className={styles.close__button}
        >
          X
        </button>
        <h3 className={styles.modal_title}>Form registration</h3>
        <form className={styles.form_box} onSubmit={handleSubmit}>
          <input
            className={styles.form_input}
            placeholder="Email"
            name="email"
            type="email"
            value={email}
            id={emailInputId}
            onChange={handleChange}
            required
          ></input>
          <input
            className={styles.form_input}
            placeholder="Phone"
            name="phone"
            type="text"
            value={tel}
            id={telInputId}
            onChange={handleChange}
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12  цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
          ></input>

          <button
            type="submit"
            onClick={handleSave}
            className={styles.form_button}
          >
            Submit
          </button>
        </form>
      </div>
    </div>,
    modalRoot,
  )
}
