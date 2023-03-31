import React from 'react'
import './App.css'
import Header from './Header'
import Inicio from './Inicio'
import Qesosoji from './Qesosoji'
import Conceptos from './Conceptos'
import Adeosoji from './Adeosoji'
import Personajes from './Personajes'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Inicio
      imgp = './images/fondo.png'
      />
      <Qesosoji/>
      <Conceptos/>
      <Adeosoji/>

      <Personajes

       imgpersonaje1 ='./images/Powolf.png'
       nombre1 ='Powolf'
       titulo1 = 'CONÓCEME: POWOLF'
       texto1 ='Es un lobo común, es el personaje secundario de nuestro videojuego con
       grandes habilidades de detención de gases tóxicos.'

       imgpersonaje2 ='./images/Golem.png'
       nombre2 ='Golem'
       titulo2 = 'CONÓCEME: GOLEM'
       texto2 ='Es un monstruo de desechos tóxicos que ha tomado vida propia, es el villano de
       nuestro videojuego con habilidades para la propagación de la contaminación.'

       imgpersonaje3 ='./images/Racoon.png'
       nombre3 ='Racoon'
       titulo3 = 'CONÓCEME: RACOON'
       texto3 ='Es un mapache de la especie boreal o común, el personaje principal de nuestro
       videojuego con grandes habilidades de olfato y tacto.'
      />
      <Footer/>
    </div>
  )
}

export default App
