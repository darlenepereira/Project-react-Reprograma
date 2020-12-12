
import { Formik, Field, Form, ErrorMessage } from 'formik'
import schemaModal from './schemaModal'
import '../Styles/modal/modal.css'
import '../Styles/modal/modalDoar.css'
import Swal from 'sweetalert2'


const ModalFormDoar = ({ id='modal', onClose = () => {}, Children}) => {

    const handleOutsideClick = (e) => {
        if(e.target.id === id) onClose();
    }
    
    function onSubmit(values,{ setSubmitting, resetForm }){
    console.log(values)
    
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Tudo certo!',  
        text: 'Em breve entraremos contato.',   
        showConfirmButton: false,
        timer: 2300
      })

    setSubmitting(false)
    resetForm({ values: '' }) 
    onClose()
    }

    
    return(       
        <div id={id} className='modalDoar' onClick={handleOutsideClick}>
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
                    {({isSubmitting}) => (

                    <Form className='container-form-section'>

                        <button onClick={(onClose)} className='close'>X</button>

                        <h2 className='form-title-section' >Preencha o formulário</h2>
                           
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
                            <section>
                                <input type="checkbox" id="coding" name="interest" value="coding"></input>
                                <label for="scales" className='help'>Apadrinhar</label>
                            </section>

                            <section>
                                <input type="checkbox" id="coding" name="interest" value="coding"></input>
                                <label for="scales" className='help' >Ajudar</label>
                            </section>

                            <section>
                                <input type="checkbox" id="coding" name="interest" value="coding"></input>
                                <label for="scales" className='help' >Voluntário</label>
                            </section>
                        </div>

                        <button 
                            type='submit' 
                            value='send' 
                            name='send'
                            className="button-submit"    
                            disabled={isSubmitting}      
                            >
                            Enviar                            
                        </button>   
                        </Form>
                        )}
                </Formik>
                <div className='content'>{Children}</div>
        </div>
    )
}

export default ModalFormDoar