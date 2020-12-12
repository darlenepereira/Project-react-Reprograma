import { Formik, Field, Form, ErrorMessage } from 'formik'
import schemaModal from './schemaModal'
import '../Styles/modal/modal.css'
import Swal from 'sweetalert2'
import Data from '../Services/Data'
import { useState } from 'react'


const ModalForm = ({ id='modal', onClose = () => {}, Children}) => { 

    const handleOutsideClick = (e) => {
        if(e.target.id === id) onClose();
    }

    const [currency, setCurrency] = useState();
    const [agree, setAgree] = useState(false);

    
    function onSubmit(values,{resetForm }){
        console.log(values)

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Formulário enviado!',  
            text: 'Em breve entraremos em contato',   
            showConfirmButton: false,
            timer: 2300
          })

        resetForm({ values: '' }) 
        onClose()
        }

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    const checkboxHandler = () => { 
        setAgree(!agree)
    }

    return(       
        <div id={id} className='modal' onClick={handleOutsideClick}>
            <Formik
                    onSubmit={onSubmit}
                    validationSchema={schemaModal}
                    initialValues={{
                        name: '',
                        date: '',
                        email: '',
                        genero: '',
                        select:'',
                    }}
                    >
                    <Form className='container-form-section'>

                        <button onClick={(onClose)} className='close'>X</button>

                        <h2 className='form-title-section' >Preencha o formulário de adoção</h2>
                           
                        <section className='form-section'>
                            <Field type="text" name='name' placeholder="Nome Completo:" className='input-form'/>
                                <p className='error'><ErrorMessage name='name' /></p>

                             <Field type="phonenumber" name='phone' placeholder="Telefone: ()" className='input-form'/>
                                <p className='error'><ErrorMessage name='phone' /></p>
                            
                            <Field type="date" name='date' className='input-form'/>
                                <p className='error'><ErrorMessage name='date' /></p>

                            <Field type="text" name='genero' placeholder="Genero:" className='input-form'/>
                                <p className='error'><ErrorMessage name='genero' /></p>

                            <Field type="text" name='email' placeholder="E-mail:" className='input-form'/>
                                <p className='error'><ErrorMessage name='email' /></p>
                         </section>
                        <div className='selection'>
                            <p className='text-section'> O nome do meu miau é:</p>
                             <Field
                                className='input-section'
                                name='select'
                                component='select'
                                value={currency}
                                onChange={handleChange}
                                SelectProps={{
                                    native: true,
                                }}
                               >
                                 {Data.map((option) => (
                                    <option key={option.id} value={option.id}>
                                            {option.name}
                                    </option>
                                ))}
                            </Field>
                        </div>
                        <div id='ckeck'>
                        <input type="checkbox" id="agree"  onChange={checkboxHandler}/>
                        <label> Aceite os <b>termos e condições</b> para continuar</label>
                        </div>

                        <button 
                            type='submit' 
                            value='send' 
                            name='send'
                            className="button-submit"    
                            disabled={!agree}
                            >
                            Enviar                            
                        </button>   
                        </Form>
                </Formik>
                <div className='content'>{Children}</div>
        </div>
    )
}

export default ModalForm