import DataHelp from '../Services/DataHelp'
import '../Styles/buttons/button.css'
import '../Styles/components/adopt.css'
import { useState } from 'react'
import ModalFormDoar from '../Modal/ModalFormDoar' 


const Adopt = () => {

    const[openModalFom, setOpenModalFom] = useState(false)

    return(
        <>
            <h2 className='title-h2'>Mas, como posso ajudar?</h2>
            <p className='title-text doar-text'>Se você não pode adotar um gatinho, veja como você pode 
                colaborar para que esses animaiszinhos continuem recebendo
                todo o cuidado, amor e carinho. 
            </p> 
            <div className='card-doar'>
            {
                DataHelp.map(adopt =>{
                    return<div key={adopt.id} className='card-options'>
                    <section>
                            <img src={adopt.image} alt="Foto do gatinho"/>
                            <h3>{adopt.title}</h3>
                            <p className='title-text'>{adopt.text}</p>
                            <button onClick={() => setOpenModalFom(true)} className='button-secondary button-doar'>{adopt.button}</button>
                                {openModalFom ? <ModalFormDoar onClose={()=> setOpenModalFom(false)}>
                            </ModalFormDoar>: null}    
                    </section>
                </div>
                })
            }
            </div>
            
        </>
    )
}

export default Adopt