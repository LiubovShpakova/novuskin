import { useState } from 'react'
import Conteiner from '../Conteiner/Conteiner'
import styles from './Consult.module.css'

export default function Consult() {
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')
  const [description, setDescription] = useState('')

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value)
      case 'phone':
        return setTel(value)
      case 'description':
        return setDescription(value)
      default:
        return
    }
  }
  // const onLogin = event => dispatch(operations.logIn(event))
  const handleSubmit = event => {
    event.preventDefault()
    //  onLogin({ email, password })

    setEmail('')
    setTel('')
    setDescription('')
  }
  return (
    <Conteiner>
      <section className={styles.consult}>
        <div className={styles.consult_form}>
          <h3 className={styles.consult_title}>
            We are here
            <br /> to help
          </h3>
          <form className={styles.consult_form_box} onSubmit={handleSubmit}>
            <input
              className={styles.consult_form_input}
              placeholder="Email"
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
              required
            ></input>
            <input
              className={styles.consult_form_input}
              placeholder="Phone"
              name="phone"
              type="text"
              value={tel}
              onChange={handleChange}
              pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
              title="Номер телефона должен состоять из 11-12  цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
              required
            ></input>
            <input
              className={styles.consult_form_input}
              placeholder="Description"
              name="description"
              type="text"
              value={description}
              onChange={handleChange}
              required
            ></input>
            <button type="submit" className={styles.consult_form_button}>
              Get a consulation
            </button>
          </form>
        </div>
        <div className={styles.consult_popular}>
          <h2 className={styles.consult_popular_title}>
            Popular <br />
            Treatments{' '}
          </h2>
          <p className={styles.consult_popular_text}>
            It’s impressive what an impact non-surgical cosmetic treatments like
            lasers, fillers and peels can have. Whether it’s fat taken from one
            part of your body and injected into another, or fillers used to
            shape and sculpt your nose, non-surgical cosmetic treatments are
            more popular than ever. Here are 17 procedures, that don’t require
            going under the knife, that will be big in 2021.
          </p>
          <button type="button" className={styles.consult_popular_button}>
            wich is right button
          </button>
        </div>
      </section>
    </Conteiner>
  )
}
