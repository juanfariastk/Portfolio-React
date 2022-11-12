import { Container, Row, Tab, Col, Nav} from "react-bootstrap"
import { Cards } from "./Cards"

import img_proj1 from "../arquivos_midia/imagens/teste_proj.png"
import light_blossom2 from "../arquivos_midia/imagens/light_blossom2.png"

export const Projetos = () => {

    const projetos = [
        {
            nome:"projeto - 1",
            descricao:" desc projeto 1",
            img:img_proj1,
        },
        {
            nome:"projeto-2",
            descricao:"desc projeto 2",
            img:img_proj1,
        },
        {
            nome:"projeto - 3",
            descricao:"desc projeto 3",
            img:img_proj1,
        },
        {
            nome:"projeto - 4",
            descricao:"desc projeto 4",
            img: img_proj1
        },
        {
            nome:"projeto - 5",
            descricao:"desc projeto 5",
            img: img_proj1
        },
        {
            nome:"projeto - 6",
            descricao:"desc projeto 6",
            img: img_proj1
        }
    ]

    return(
        <section className="projeto" id="projetos">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Projetos</h2>
                        <p>Texto qualquer para testes antes de colocar o texto que de fato será usado!</p>

                        <Tab.Container id="projetos-abas" defaultActiveKey="primeiro">

                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="primeiro">Web</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="segundo">Visuais</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            
                            <Tab.Content>

                                <Tab.Pane eventKey="primeiro">

                                    <Row>{projetos.map((dados, i) => { return (
                                        <Cards key={i} {...dados}/>
                                    ) })}</Row>

                                </Tab.Pane>
                                
                                <Tab.Pane eventKey="segundo">
                                    Area indefinida
                                </Tab.Pane>

                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-dir-proj" src={light_blossom2}></img>
        </section>
    )
}