import {useState, useEffect, useRef} from "react"
import { Col, Container, Row } from "react-bootstrap"
//import {gsap} from "gsap"
import yone_banner from "../arquivos_midia/imagens/yone_banner.png"

export const BannerInicial = () => {

    const [loop_items, set_loop] = useState(0)
    const [deleta_estado, set_delete]=  useState(false)

    const rotacao_items = ["Desenvolvedor web", "Designer Gráfico"]
    const [texto_atual, set_texto] = useState('')
    const tempo_animacao = 2000;
    const [estado, set_estado] = useState(300 - Math.random *100)

    useEffect(()=>{
        let relogio_animacao =setInterval(() => {
            tick()
        }, estado)

        return ()=>{clearInterval(relogio_animacao)}
    },  [texto_atual])

    const tick =  () => {
        let i = loop_items % rotacao_items.length
        let texto_completo = rotacao_items[i]
        let texto_novo = deleta_estado ? texto_completo.substring(0, texto_atual.length - 1) : texto_completo.substring(0, texto_atual.length + 1)
        set_texto(texto_novo)

        if(deleta_estado){
            set_estado(temp_anterior => temp_anterior/2)
        }

        if(!deleta_estado && texto_novo === texto_completo){
            set_delete(true)
            set_estado(tempo_animacao)
        }else if(deleta_estado && texto_novo ===''){
            set_delete(false)
            set_loop(loop_items + 1)
            set_estado(500)
        }
    }
    return (
        <section className="banner" id="home" >
            <Container>
                <Row className="align-items-center">
                    <Col xs={12}  md={6} xl={7} >
                        <span className="tagline">Seja Bem-Vindo ao meu Mundo!</span>
                        <h1>{`Olá! Me chamo Juan `}<span className="wrap">{texto_atual}</span></h1>
                        <p>Desça e conheça um pouco mais sobre os meus projetos...</p>
                    </Col>
                    <Col xs={12} md={6} xl={5} >
                        <img src={yone_banner} alt="banner_inicio"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}