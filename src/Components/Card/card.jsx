import S from "./card.module.scss"
function Card({image, title}) {
    return(
        <section>
            <img src={image} alt="" />
            <h3>{title}</h3>
        </section>
    )
}

export default Card