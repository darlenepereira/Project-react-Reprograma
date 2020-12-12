import { Link } from 'react-router-dom'
import logo from '../Assets/Logo1.png'

const Menu = () => {

    return( 
        <>
            <nav>              
                <Link to='/'><img src={logo} alt="logo da ong ApadrinheCats" className='image-menu'/> </Link>
                <div className='menu'>
                <ul className='menu-list'>
                    <li><Link to='/' clasName='routes' id='menu'>Home</Link></li>
                    <li><Link to='/About' clasName='routes'>Sobre</Link></li>
                    <li> <Link to='/Adoption' clasName='routes' >Adoação</Link></li>  
                    <li> <Link to='/Contact' clasName='routes' >Contato</Link></li>  
                    </ul> 
                </div>
            </nav>
        </> 
    )
}

export default Menu