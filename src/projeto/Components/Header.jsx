import { Link } from 'react-router-dom'
import '../Styles/components/header.css'
import '../Styles/buttons/button.css'


const Header = () => {
    return(
        <>
        <header>
            <div className='header-banner'>

            <h1>Apadrinhe um Gatinho</h1>
            <h3> Quer ter um lar mais divertido?
                Então, a dica que nós damos a você é: A adote um gatinho ou...
            </h3>
            <p>Você tamém pode contruibuir com doações</p>
            <button title='clique e saiba mais' className='button-primary button-one'>
                <Link to='/Donation' clasName='route'>Saiba Mais</Link>
            </button>
            </div>
        </header>

        </>
    )
}

export default Header