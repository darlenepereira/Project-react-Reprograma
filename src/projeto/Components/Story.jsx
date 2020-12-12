import '../Styles/components/story.css'

const Story = () => {
    return(
        <>
            <div className='story'>
            <h2 className='title-h2'>Conheça a nossa história</h2>
            <p className='title-text story-text'>
                A ApadrinheCats nasceu com o objetivo de salvar, resgatar e cuidar de gatos que foram abandonados, os que nasceram nas ruas ou que se perderam da sua casa ao sair para passear. Nossa ong possui um espaço aconchegante e interativo para os nossos felinos se sentirem em casa e não perderem o seu instinto de brincar e descansar. A ong fica localizada em São Paulo e é um lugar fechado onde os gatos possuem acesso às ruas, porém sem a possibilidade de sair. Nossa missão é dar amor e fazer da ong um lar de felinos cuidando, medicando e dessa forma disponibilizando para adoção. Aqui, realizamos enventos e damos paletras para os donos terem um conhecimento maior sobre seus felinos e suas personalidades. Você pode acompanhar nosso projeto e ficar por dentro do que está acontecendo no mundo dos cats nos seguindo nas redes sociais. Ah, não esqueça de agendar a sua visita para passar um tempo com os Cats e nos conhecer melhor :) !
                </p>
            <section className='icons'>
                <a href="https://www.facebook.com/gatosegatoss/" target='blank'><img src="https://www.flaticon.com/svg/static/icons/svg/1384/1384053.svg" alt="Link do Facebook" /></a>
                <a href="https://www.instagram.com/explore/tags/cats/" target='blank'><img src="https://www.flaticon.com/svg/static/icons/svg/2111/2111463.svg" alt="Link do Instagram" /></a>
                <a href="https://www.tiktok.com/tag/cat" target='blank'><img src="https://www.flaticon.com/svg/static/icons/svg/3046/3046121.svg" alt="Link do Tiktok" /></a>
            </section>
            </div>
        </>
    )
}

export default Story