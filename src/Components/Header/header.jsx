import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Inicio from '../Pages/inicio/Inicio'
import LivrosDoados from '../Pages/livrosDoados/Doados'
import QueroDoar from '../Pages/queroDoar/Doar'
import S from "./header.module.scss"
import Livro from "./livro.png"
import Estudo from "./estudo.png"
import Lupa from "./lupa.png"

function Header() {
    return(
        <BrowserRouter>
            <header>
                <section className={S.inicio}>
                    <div className={S.box1}>
                        <img className={S.livro} src={Livro} alt="imagem de um livro" />
                        <h1 className={S.titulo}>Livros Vai Na Web</h1>
                    </div>

                    <nav className={S.box2}>
                        <ul>
                            <li>
                            <Link className={S.listas} to="/">
                                Início
                            </Link>
                            </li>
                            <li>
                            <Link className={S.listas} to="/livrosdoados">
                                Livros Doados
                            </Link>
                            </li>
                            <li>
                            <Link className={S.listas} to="/querodoar">
                                Quero Doar
                            </Link>
                            </li>
                        </ul>
                    </nav>
                    <section className={S.search}>
                        <input className={S.input} type="text" placeholder="O que você procura?" />
                        <img className={S.lupa} src={Lupa} alt="imagem de lupa" />
                    </section>
                </section>
            </header>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/livrosdoados" element={<LivrosDoados />} />
                <Route path="/querodoar" element={<QueroDoar />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Header