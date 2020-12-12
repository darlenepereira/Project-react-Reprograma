import logo from '../Assets/Logo-oficial.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import '../Styles/components/form.css'
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
        <div className='contact' id='contact'>
            <AnchorLink  href='#menu'><img src={logo} alt="Logo da ong ApadrinheCats" /></AnchorLink>
            <Formik
                onSubmit={onSubmit}
                validationSchema={schema}
                initialValues={{
                    name: '',
                    email: '',
                    message: '',
                }}
                >
                  <Form className='form'>
                      <h2 className='title-fom'>Fale conosco!</h2>
                        
                        <Field
                            type="text"
                            name="name"
                            placeholder="Digite o seu nome" 
                            className='input'
                        />
                        <p className='error'><ErrorMessage name='name' /></p>

                        <Field
                            type='text'
                            name="email"
                            placeholder="Digite o seu e-mail"
                            className='input'
                        />
                        <p className='error'><ErrorMessage name='email' /></p>

                        <Field
                            as='textarea'
                            name="message"
                            placeholder="Mensagem"
                            className='message'
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

