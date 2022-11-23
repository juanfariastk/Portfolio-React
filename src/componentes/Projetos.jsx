import { Container, Row, Tab, Col, Nav} from "react-bootstrap"
import { Cards } from "./Cards"

import img_proj1 from "../arquivos_midia/imagens/cerrisete.jpg"
import img_proj2 from "../arquivos_midia/imagens/meuney-minhavida.jpg"
import img_proj3 from "../arquivos_midia/imagens/messizada.jpg"

import img_proj4 from "../arquivos_midia/imagens/dashtk.png"
import img_proj5 from "../arquivos_midia/imagens/jfbank.png"
import img_proj6 from "../arquivos_midia/imagens/angular15.jpg"

export const Projetos = () => {

    const projetos_visuais = [
        {
            nome:"Flyer - CR7",
            descricao:" Design Esportivo",
            img:img_proj1,
        },
        {
            nome:"Flyer - Ney 🌹",
            descricao:"Design Esportivo",
            img:img_proj2,
        },
        {
            nome:"Flyer - M30",
            descricao:"Design Esportivo",
            img:img_proj3,
        },
    ]

    const projetos_web = [
        {
            nome:"JFBANK",
            descricao:" Estudos em Bootstrap",
            img:img_proj5,
        },
        {
            nome:" ... ",
            descricao:"Novidades em Breve!",
            img:img_proj6,
        },
        {
            nome:"Dashboard Trade Killer",
            descricao:"Projeto Etapa I",
            img:img_proj4,
        }
        
    ]

    return(
        <section className="projeto" id="projetos">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Projetos</h2>
                        <p>Conheça alguns dos meus projetos!</p>

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

                                    <Row>{projetos_web.map((dados, i) => { return (
                                        <Cards key={i} {...dados}/>
                                    ) })}</Row>

                                </Tab.Pane>
                                
                                <Tab.Pane eventKey="segundo">

                                    <Row>{projetos_visuais.map((dados, i) => { return (
                                            <Cards key={i} {...dados}/>
                                        ) })}</Row>

                                </Tab.Pane>

                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}