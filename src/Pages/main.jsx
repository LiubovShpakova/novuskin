import { useState } from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Treatments from '../components/Treatments/Treatments'
import Consult from '../components/Consult/Consult.jsx'
import Results from '../components/Results/Results'
import Reviews from '../components/Reviews/Reviews'
import Articles from '../components/Articles/ArticlesMembers'
import NovuskinFooter from '../components/Footer/NovuskinFooter'
import Modal from '../components/Modal/modal'
import ButtonBackToTop from '../components/ButtonBackToTop/ButtonBackToTop'

const MainView = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const handleOpenModal = () => {
    setIsOpenModal(true)
  }
  const handleCloseModal = () => {
    setIsOpenModal(false)
  }
  return (
    <>
      <Header onOpenModal={handleOpenModal} />
      <Hero onOpenModal={handleOpenModal} />
      <Treatments />
      <Consult />
      <Results />
      <Reviews />
      <Articles />
      <NovuskinFooter />
      {isOpenModal && <Modal onClose={handleCloseModal} />}
      <ButtonBackToTop />
    </>
  )
}

export default MainView

