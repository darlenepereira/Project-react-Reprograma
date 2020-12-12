import ContactForm from '../Components/ContactForm'
import Footer from '../Components/Footer'
import Menu from '../Components/Menu'

const Contact = () => {

    return(
        <div>
            <Menu/>
            <h2 className='subtitle '>Entre em contato conosco!</h2>
            <p className='title-text about-text contact-subtitle'>
            Se você quer saber mais sobre a nossa ong ou possui alguma dúvida, você pode entrar em contato conosco pelas opções disponibilizadas abaixo.
            </p>
            <ContactForm/>
            <Footer/>
        </div>
    )

}

export default Contact