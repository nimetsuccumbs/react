import { useState } from 'react'
import './App.css'
import Mensagem from './components/Mensagem';
import Frase from './components/Frase';
import Calculadora from './components/Calculadora';
function Saudacao() {
  return <h3>hello world</h3>
}

function App(){

    return (
      <>
      <Saudacao/>
      <Mensagem texto="meu texto :3"/>
      <Frase/>
      <Calculadora/>
      </>
    )
}

export default App
