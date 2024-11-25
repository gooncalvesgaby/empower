import S from "./inicio.module.scss"
import Card from "../../Card/card"
import Imagem1 from "../../Main/Card1.png"
import Imagem2 from "../../Main/Card2.png"
import Imagem3 from "../../Main/Card3.png"
import Imagem4 from "../../Main/Card4.png"

function Inicio() {
    return(
        <>
        <main>
                <aside>
                    <h2>VENHA FAZER PARTE <br />
                    DA MAIOR REDE DE <br />
                    DOAÇÃO</h2>
                </aside>
            <div>
                <p className={S.titulo}>Por que devo doar?</p>
            </div>
            <section className={S.myCard}>
                <Card
                image={Imagem1}
                title="Oferece livros a quem nao tem acesso,
                ajudando a reduzir a exclusão social"
                />
                <Card
                image={Imagem2}
                title="Estimula o hábito da leitura
                e o aprendizado contínuo."
                />
                <Card
                image={Imagem3}
                title="Fornece conhecimento e inspiração, permitindo
                que individuos transformem suas vidas."
                />
                <Card
                image={Imagem4}
                title="Garante que todo, independentemente de sua
                condição, tenham oportunidades de aprendizado"
                />
            </section>
        </main>
        </>
    )
}

export default Inicio