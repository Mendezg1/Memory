import './UnaCarta.css'

export default function UnaCarta({carta, procesarSeleccion, girada, delay}){

    const procesarClick = () =>{
        if(!delay){
            procesarSeleccion(carta)
        }
    }

    return(
        <div className='carta'>
            <div className={girada ? "girada" : ""}>
                <img className='delante' src={carta.src} alt="delante carta"></img>
                <img 
                className='detras' 
                src="/images/carta.png" 
                alt="detras carta"
                onClick={procesarClick}>
                </img>
            </div>
        </div>
    )
}