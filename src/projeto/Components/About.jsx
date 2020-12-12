import '../Styles/components/about.css'
import Menu from "./Menu"
import Footer from '../Components/Footer'
import Gallery from "react-photo-gallery";
import { photos } from "../Services/Photos";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const About = () => {
    
    return( 
        <>
        <Menu/>
        <h2 className='subtitle'>Sobre Nós</h2>
            <p className='title-text about-text'>
            O site ApadrinheCats é um site desenvolvido para a ong que resgata, cuida e prepara os gatinhos para receberem um novo lar. O objetivo do site é facilitar, aproximar as pessoas do projeto social. A ideia foi desenvolver o site onde a ong consegue adicionar informações dos seus gatinhos para adoção, facilitando o contato com as pessoas. Além disso, eles possuem outras formas de conectar o amor entre nós e os animais disponibilizando para aqueles que não possuem condições de adotar outras maneiras de ajudar logo na página inicial na seção Mas, como posso ajudar?. O site ApadrinheCats nasceu para aproximar as pessoas do mundo animal e lembrar que eles dependem da gente e que gestos pequenos podem transformar a vida desses felinos. O site foi desenvolvido em React e a ideia do projeto surgiu a partir da minha experiência com a adoção da minha gata Ayka que mudou a forma como eu via o cuidado com os animais e o quanto eles podem nos ajudar e ver o mundo com mais amor e compaixão por nós mesmos. Abaixo disponibilizo minhas redes sociais para conexão! 
            </p>

            <section className='icons'>
                    <a href="https://github.com/darlenepereira" target='blank'>
                        <img src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-256.png" alt="logo do Github" />
                    </a>
                    
                    <a href="https://www.linkedin.com/in/darlene-pereira" target='blank'>
                    <img src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Linkedin2_svg-256.png" alt="logo do LinkeDin"/>
                    </a>

                    <a href="https://www.behance.net/darleneplima" target='blank'>
                    <img src="https://img.icons8.com/metro/104/000000/behance.png" alt='logo do Behance'/>
                    </a>
            </section>

            <h2 className='subtitle' >Galeria de fotos</h2>
            <div className='photos'>
                <Gallery className='gallery' photos={photos}/>;
            </div>

            <Footer/>
        </>
    )
}

export default About