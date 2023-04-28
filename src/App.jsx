import { useEffect, useState } from 'react'
import './App.css'
import UnaCarta from './components/UnaCarta'

const imgs = [
    {"src": "/images/amuleto.png", pareja: false},
    {"src": "/images/brazalete.png", pareja: false},
    {"src": "/images/cristal.png", pareja: false},
    {"src": "/images/emblema.png", pareja: false},
    {"src": "/images/lanza.png", pareja: false},
    {"src": "/images/runa.png", pareja: false}
]

function App(){

    const[cartas, setCartas] = useState([])
    const[turnos, setTurnos] = useState(0)

    const[primeraCarta, setPrimeraCarta] = useState(null)
    const[segundaCarta, setSegundaCarta] = useState(null)

    const[delay, setDelay] = useState(false)

    const revolverCartas = () =>{
        const cartasRevueltas = [...imgs, ...imgs]
            .sort( () => Math.random() - 0.5)
            .map((carta) => ({...carta, id: Math.random()}))
        
        setCartas(cartasRevueltas)
        setTurnos(0)
    }

    const procesarSeleccion = (carta) => {
      primeraCarta ? setSegundaCarta(carta) : setPrimeraCarta(carta)
    }

    useEffect(() => {
      if(primeraCarta && segundaCarta){
        setDelay(true)
        if(primeraCarta.src === segundaCarta.src){
          setCartas(prevCartas =>{
            return prevCartas.map( carta =>{
              if(carta.src === primeraCarta.src) return {...carta, pareja: true}

              else return carta
            })
          })
        }
        setTimeout(() => procesarTurno(), 1000)
      }
    }, [primeraCarta, segundaCarta])

    const procesarTurno = () =>{
      setPrimeraCarta(null)
      setSegundaCarta(null)
      setTurnos(prevTurnos => prevTurnos + 1)
      setDelay(false)
    }

    const setFinal = () =>{
      var counter = 0
      return cartas.map((carta =>{
        if(carta.pareja){
          counter++
        }
        return counter
      }))
    }

    if(setFinal()[11] == 12){
      document.getElementById("final").style.display = "block"
    }
    else{
      document.getElementById("final").style.display = "none"
    }

    return(
        <div className="App">
        <h1>MY MEMORY</h1>
        <h3>Ricardo Méndez - 21289</h3>
        <button onClick={revolverCartas}>New Game</button>
        <p>Turnos: {turnos}</p>
          <div className="Tablero">
            {cartas.map(carta => (
              <UnaCarta 
              key={carta.id} 
              carta={carta} 
              procesarSeleccion = {procesarSeleccion}
              girada = {carta === primeraCarta || carta === segundaCarta || carta.pareja}
              delay = {delay}
              />
            ))}
          </div>
          <h2 id="final">¡JUEGO TERMINADO!</h2>
        </div>
    )
}

export default App