import * as Yup from 'yup'

export default Yup.object().shape({
    name: Yup.string().min(4).required('Informe o nome Completo'),
    email: Yup.string().email('Informe um e-mail válido').required('Informe um e-mail válido'),
    message:Yup.string().min(8).required('Por favor, escreva sua mensagem'),
});