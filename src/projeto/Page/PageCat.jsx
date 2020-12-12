const { default: Cards } = require("../Components/Cards")
const { default: Adopt } = require("../Components/Adopt")
const { default: Story } = require("../Components/Story")
const { default: Header } = require("../Components/Header")
const { default: Menu } = require("../Components/Menu")
const { default: FormContact } = require("../Components/FormContact")
const { default: Footer } = require("../Components/Footer")



const PageCat = () =>{
    return(
        <>
            <Menu/>
            <Header/>
            <Cards/>
            <Adopt/>
            <Story/>
            <FormContact/>
            <Footer/>
        </>
    )
}

export default PageCat