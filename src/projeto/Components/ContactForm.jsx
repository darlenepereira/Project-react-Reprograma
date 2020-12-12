import '../Styles/components/contact.css'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import schema from '../../schema'
import Swal from 'sweetalert2'




const FormContact = () => {

    function onSubmit(values, { resetForm }){
        console.log(values)
        resetForm({ values: '' }) 

        Swal.fire({
            position: 'center',
            icon: 'success',
            text: 'Mensagem enviada com sucesso!',
            showConfirmButton: false,
            timer: 1500
          })
    }

    return (
        <div className='contact-forms' id='contact'>
            <Formik
                onSubmit={onSubmit}
                validationSchema={schema}
                initialValues={{
                    name: '',
                    email: '',
                    message: '',
                }}
                >
                  <Form className='form-contact'>
                        
                        <Field
                            type="text"
                            name="name"
                            placeholder="Digite o seu nome" 
                            className='input-contact '
                        />
                        <p className='error'><ErrorMessage name='name' /></p>

                        <Field
                            type='text'
                            name="email"
                            placeholder="Digite o seu e-mail"
                            className='input-contact'
                        />
                        <p className='error'><ErrorMessage name='email' /></p>

                        <Field
                            as='textarea'
                            name="message"
                            placeholder="Mensagem"
                            className='message-contact'
                        />
                       <p className='error'><ErrorMessage name='message' /></p>

                        <button 
                            type='submit' 
                            value='send' 
                            className=" button-primary button-form"
                            >
                            Enviar                          
                        </button>    

                    </Form>
                </Formik>
        </div>
    )
}

export default FormContact 

