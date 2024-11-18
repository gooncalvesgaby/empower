import S from "./header.module.scss"
import Livro from "./livro.png"

function Header() {
    return(
        <div className={S.inicio}>
            <div className={S.box1}>
                <img className={S.livro} src={Livro} alt="imagem de um livro" />
                <h1 className={S.titulo}>Livros Vai Na Web</h1>
            </div>

            <div className={S.box2}>
                <li className={S.lista}>
                    <ol>Início</ol>
                    <ol>Livros Doados</ol>
                    <ol>Quero Doar</ol>
                </li>
            </div>
            <div>
                <input className={S.input} type="text" placeholder="O que você procura?" />
            </div>
        </div>
    )
}

export default Header