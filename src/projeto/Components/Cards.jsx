import Data from '../Services/Data'
import '../Styles/buttons/button.css'
import '../Styles/components/cards.css'
import { FaBirthdayCake } from 'react-icons/fa'
import { AiFillMedicineBox } from 'react-icons/ai'
import { DiGithubAlt } from 'react-icons/di'
import Slider from 'react-slick'
import { useState } from 'react'
import ModalForm from '../Modal/ModalForm' 


const Cards = () => {

    const[openModal, setOpenModal] = useState(false) 

    let settings = {
        dot: true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1
    }

    return (
        <>
            <div className='title'>
                <h2 className='title-h2'>Gatinhos para adoação</h2>
                <p  className='title-text text-cards'>Qual gatinho você vai chamar de seu para trazer alegria para o seu lar? É só clicar em adotar que entramos em contato :)
                </p>
            </div>
            <Slider {...settings}>
            <main className='container'>
                <div className='cards'>
                    {Data.map(info => { 
                        return <div key={info.id} text='clique no botão para adotar' className='cards-over'>
                            <section className='card-image'>
                                <img src={info.image} alt="imagem do Gato para adoção" />
                            </section>

                            <section className=' .title-text info-cards'>
                                <h3>{info.name}</h3> 
                                <ul>
                                    <li className='list-cads'>
                                        <FaBirthdayCake size={14} className='icon' color='#F0715B' />
                                        {info.year}
                                    </li>
                                    <li className='list-cads'>
                                        <AiFillMedicineBox size={14} className='icon' color='#F0715B' />
                                        {info.info}
                                    </li>
                                    <li className='list-cads'>
                                        <DiGithubAlt size={14} className='icon' color='#F0715B' /> 
                                        {info.genero}
                                    </li>
                                </ul>
                                <button onClick={() => setOpenModal(true)} className='button-tertiary button-adotar'>adotar</button>
                                 {openModal ? <ModalForm onClose={()=> setOpenModal(false)}>
                                      </ModalForm>: null}
                            </section> 
                        </div> 
                    })}
                </div>
            </main>
        </Slider> 
        </>
    )
}

export default Cards