import S from "./doados.module.scss"
import Protagonista from "./protagonista.png"

function Doados() {
    return(
        <div className={S.conteudo}>
            <section>
                <h1>Livros Doados</h1>
            </section>
            <div className={S.infos}>
                <img className={S.protago} src={Protagonista} alt="imagem de um livro" />
                <p className={S.text}>O protagonista <br />
                Susanne Andrade <br />
                Ficcão
                </p>
            </div>
        </div>
    )
}

export default Doados