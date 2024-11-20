import S from "./footer.module.scss"
import Facebook from "./facebook.png"
import Twitter from "./tt.png"
import Youtube from "./yt.png"
import Linkedin from "./in.png"
import Instagram from "./insta.png"

function Footer() {
    return(
        <footer>
            <nav>
                <div>
                    <p>4002-8922</p>
                </div>
                <div>
                    <i>
                        <img src={Facebook} alt="imagem do fb" />
                    </i>
                    <i>
                        <img src={Twitter} alt="imagem do tt" />
                    </i>
                    <i>
                        <img src={Youtube} alt="imagem do yt" />
                    </i>
                    <i>
                        <img src={Linkedin} alt="imagem do in" />
                    </i>
                    <i>
                        <img src={Instagram} alt="imagem do insta" />
                    </i>
                </div>
            </nav>
        </footer>
    )
}

export default Footer