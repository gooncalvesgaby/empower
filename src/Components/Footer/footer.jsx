import S from "./footer.module.scss"
import Facebook from "./facebook.png"
import Twitter from "./tt.png"
import Youtube from "./yt.png"
import Linkedin from "./in.png"
import Instagram from "./insta.png"

function Footer() {
    return(
        <>
            <section className={S.boxsection}>
                <div>
                    <p>4002-8922</p>
                </div>
                <div>
                    <i>
                        <img className={S.icons} src={Facebook} alt="imagem do fb" />
                    </i>
                    <i>
                        <img className={S.icons} src={Twitter} alt="imagem do tt" />
                    </i>
                    <i>
                        <img className={S.icons} src={Youtube} alt="imagem do yt" />
                    </i>
                    <i>
                        <img className={S.icons} src={Linkedin} alt="imagem do in" />
                    </i>
                    <i>
                        <img className={S.icons} src={Instagram} alt="imagem do insta" />
                    </i>
                </div>
            </section>
            <footer className={S.myFooter}>
                <h5 className={S.texto}>Layout desenvolvido pela Vai
                 Na Web para fins educativos - 2024</h5>
            </footer>
        </>
    )
}

export default Footer