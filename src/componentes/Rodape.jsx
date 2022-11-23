import { Container, Col, Row } from "react-bootstrap"
//import icon_LinkedIn from '../arquivos_midia/imagens/icon_LinkedIn.svg'
//import icon_Instagram from '../arquivos_midia/imagens/icon_Instagram.svg'
import logo from '../arquivos_midia/imagens/logo_fim.png'
//import { img_logo} from "../arquivos_midia/imagens/"
export const Rodape= () => {
    return(
        <footer className="rodape">
            <Container>
                <Row className="align-item-center">

                    <Col size={12} sm={12} >
                        <img src={logo} className="col align-self-start"></img>
                        <p className="mt-1"> &#169; Dev. Juan Farias </p>
                    </Col>


                </Row>
            </Container>
        </footer>
    )
}