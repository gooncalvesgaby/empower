import S from "./doar.module.scss"
import Doacao from "./doar.png"

function Doar() {
    return(
        <section className={S.box}>
            <h6>Por favor, preencha o formulário com suas informações
                e as informações do Livro
            </h6>
            <form className={S.quest}>
                <img className={S.title} src={Doacao} alt="" />
                <input type="text" placeholder="Titulo" />
                <input type="text" placeholder="Categoria" />
                <input type="text" placeholder="Autor" />
                <input type="text" placeholder="Link da Imagem" />
                <button>Doar</button>
            </form>
        </section>
    )
}

export default Doar