import { Col, Row, Container } from "react-bootstrap"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import hab_90 from "../arquivos_midia/imagens/hab-90.png"
import hab_75 from "../arquivos_midia/imagens/hab-75.png"
import hab_45 from "../arquivos_midia/imagens/hab-45.png"
import light_blossom from "../arquivos_midia/imagens/light_blossom.png"
import light_blossom2 from "../arquivos_midia/imagens/light_blossom2.png"

export const Habilidades = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      }

    return(
        <section className="habilidade" id="habilidades">
            <Container>
                <Row>
                    <Col>
                        <div className="box-habilidades">
                            <h2> Habilidades </h2>
                            <p> Descrição qualquer que será alterada em algum momento especifico que <br/> ainda não sei dizer em qual momento especificamente.</p>
                            <Carousel responsive={responsive} infinite={true} className="habilidades-carrossel">
                                <div className="item">
                                    <img src = {hab_90} alt="imagem"></img>
                                    <h5> Identidade Visual </h5>
                                </div>

                                <div className="item">
                                    <img src = {hab_75} alt="imagem"></img>
                                    <h5> UI/UX </h5>
                                </div>

                                <div className="item">
                                    <img src = {hab_90} alt="imagem"></img>
                                    <h5> Manipulação de Imagens </h5>
                                </div>

                                <div className="item">
                                    <img src = {hab_45} alt="imagem"></img>
                                    <h5> Frameworks </h5>
                                    <span> React - Angular</span>
                                </div>

                                <div className="item">
                                    <img src = {hab_75} alt="imagem"></img>
                                    <h5> Vetorização </h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="backgroung-esq-hab" src={light_blossom}></img>
        </section>
    )
}