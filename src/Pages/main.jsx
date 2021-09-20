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

/*
Oleksii Samoilenko18:07
const a = arg1 => arg2 => arg1 + arg2;
const b = a(1)
const c = b(2)
console.log(c)?
Oleksii Samoilenko18:10
===
var a = 1;
function func() {
  console.log(a)
  var a = 2;
}
func()
Oleksii Samoilenko18:11
===
console.log(1)
Promise.resolve().then(() => console.log(2))
setTimeout(() => console.log(3), 0)
console.log(4)
Oleksii Samoilenko18:14
===
const c = { name: 'test' }
const b = c;
b.name = 1;
c.name?
Oleksii Samoilenko18:15
===
const a async () => {
  const b = await fetch(...)
}
Oleksii Samoilenko18:18
HOC


*/
