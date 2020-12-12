import * as Yup from 'yup'

export default Yup.object().shape({
    name: Yup.string().min(2).required("obrigatótio"),
    email: Yup.string().email('insira um e-mail válido').required("obrigatótio"),
    date: Yup.date().required("obrigatótio").nullable(),
    phone: Yup.number().required('obrigatório').nullable(),
    genero: Yup.string().min(3).required('obrigatório'),
})