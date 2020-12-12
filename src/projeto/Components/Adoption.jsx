import Menu from "./Menu"
import Footer from './Footer'

import Gallery from "react-photo-gallery";
import { photos } from "../Services/PhotosDonation";


const Adoption = () => {
    return(
        <>  
            <Menu/>
            <h2 className='subtitle'>Sobre o processo para adoção</h2>
            <p className=' title-text about-text'>
            Aqui na ApadrinheCats, existem várias formas de você contribuir para que os gatinho continuem sendo cuidados e além disso para que a ong continue fazendo o melhor para eles. Bom, mas falando sobre a adoção, gostaria de enfatizar o quanto é importante para nós que os gatinhos que estão para adoção recebam um lar que atendam as necessidades que um gatinho possui. Dessa forma, o primeiro passo para a adoção é preenchendo o formulário que aparece ao clicar no botão adotar na página inicial, porque lá você já  consegue nos informar o nome do gatinho que você quer adotar. Após a confirmação de envio do formulário, você vai receber um e-mail da gente com explicações sobre o processo de adoção e posteriormente um contato telefônico para ir conhecer a instituição e darmos continuidade na adoção. Abaixo você vai conhecer os gatinhos que ganharam um lar e estão muito felizes! :) 
            </p>
        
            <h2 className='subtitle' >Gatinhos que ganharam um lar</h2>
            <div className='photos'>
                <Gallery className='gallery' photos={photos}/>
            </div>
            <Footer/> 
        </>
    )
}

export default Adoption 