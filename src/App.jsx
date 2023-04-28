import { useState } from 'react'
import './App.css'

const imgs = [
    {"src": "/images/amuleto.png"},
    {"src": "/images/brazalete.png"},
    {"src": "/images/cristal.png"},
    {"src": "/images/emblema.png"},
    {"src": "/images/lanza.png"},
    {"src": "/images/runa.png"}
]

function App(){

    const[cartas, setCartas] = useState([])
    const[turnos, setTurnos] = useState(0)

    const revolverCartas = () =>{
        const cartasRevueltas = [...imgs, ...imgs]
            .sort( () => Math.random() - 0.5)
            .map((carta) => ({...carta, id: Math.random()}))
        
        setCartas(cartasRevueltas)
        setTurnos(0)
    }

    return(
        <div className="App">
        <h1>MY MEMORY</h1>
        <button onClick={revolverCartas}>New Game</button>
          <div className="Tablero">
            {cartas.map(carta => (
              <div className='carta' key={carta.id}>
                  <div>
                    <img className='delante' src={carta.src} alt="delante carta"></img>
                    <img className='detras' src="/images/carta.png" alt="detras carta"></img>
                  </div>
              </div>
            ))}
          </div>
        </div>
    )
}

export default App