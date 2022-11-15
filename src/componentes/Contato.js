import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"

import img_contato from '../arquivos_midia/imagens/img_form.png'

export const Contato = () =>{
    
    const dados_form = {
        primeiro_nome:"",
        sobrenome:"",
        email:"",
        telefone:"",
        mensagem:""
    }

    const [novo_dados, set_dados] = useState(dados_form)
    const [botao_enviar, set_envio] = useState('Enviar')
    const [status_envio, set_status_envio] = useState({})
    const [status_desativa, set_desativa] = useState(false)

    const atualizar_form = (tipo, dado) =>{
        set_dados({...novo_dados, [tipo]:dado})
    }

    const enviar = async (i) => {
        i.preventDefault()
        set_envio('Enviando...')

        let resp = await fetch("http://localhost:5000/contact", { 
            method:"POST",
            headers:{
                "Content-Type":"Application/json;charset=utf-8"
            },
            body: JSON.stringify(novo_dados)
         })
         set_envio("Enviado")

         let final = await resp.json()
         set_dados(dados_form)

         if (final.code ===200){
            set_status_envio({success:true, mensagem:"Enviado"})
            set_desativa(true)
            
         } else{
            set_status_envio({success:false, mensagem:"Erro ao enviar, tente novamente mais tarde!"})
         }
    }

    return (
        <section className="contato" id="contato_id">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={img_contato} alt="contato-imagem" />
                    </Col>
                    <Col md={6}>
                        <h2> Entre em contato!</h2>
                        <form onSubmit={enviar}>
                            <Row>
                                <Col size={12} sm={6} className="px-1"> <input type="text" value={novo_dados.primeiro_nome} placeholder="Primeiro Nome" pattern="\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+" onChange={(i) => atualizar_form('primeiro_nome', i.target.value)}></input> </Col>
                                <Col size={12} sm={6} className="px-1"> <input type="text" value={novo_dados.sobrenome} placeholder="Sobrenome" pattern="\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+" onChange={(i) => atualizar_form('sobrenome', i.target.value)}></input> </Col>
                                <Col size={12} sm={6} className="px-1"> <input type="email" value={novo_dados.email} placeholder="Email" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"  onChange={(i) => atualizar_form('email', i.target.value)}></input> </Col>
                                <Col size={12} sm={6} className="px-1"> <input type="tel" value={novo_dados.telefone} placeholder="Telefone" pattern="^\(?\d{2}\)?[\s-]?[\s9]?\d{4}-?\d{4}$" onChange={(i) => atualizar_form('telefone', i.target.value)}></input> </Col>
                                <Col> <textarea row="6" value= {novo_dados.mensagem} placeholder="Digite sua mensagem" onChange={(i) => atualizar_form('mensagem', i.target.value)}></textarea> <button type="submit" disabled={status_desativa}> <span>{botao_enviar}</span> </button> </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}