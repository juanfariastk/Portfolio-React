import { useEffect, useState } from "react"
import { Navbar, Container, Nav} from "react-bootstrap"
import icon_Instagram from '../arquivos_midia/imagens/icon_Instagram.svg'
import icon_LinkedIn from '../arquivos_midia/imagens/icon_LinkedIn.svg'
//import logo from '../arquivos_midia/imagens/logo.png'

export const NavBar=() => {
    const[link_ativo,setLink_ativo] = useState('home')
    const[rolagem_ativa, seRolagem_ativa] = useState(false)

    useEffect(() => {
        const rolagem= () => {
            if(window.scrollY>50){
                seRolagem_ativa(true)
            } else{
                seRolagem_ativa(false)
            }
        }
        
        window.addEventListener("scroll", rolagem)

        return ()=>{ window.removeEventListener("scroll", rolagem)}
    })

    const atualizar_link_ativo = (link_novo)=> {
        setLink_ativo(link_novo)
    }
    return(
        <Navbar expand="md" className={rolagem_ativa ? "scrolled" : ""}>
          <Container>

            <Navbar.Brand href="#home"> <h4>Dev. JF</h4></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"> <span className="navbar-toggler-icon"></span></Navbar.Toggle>

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className={link_ativo === 'home'? 'active navbar-link':'navbar-link'} onClick={ () => atualizar_link_ativo('home')}>Home</Nav.Link>
                <Nav.Link href="#habilidades" className={link_ativo === 'habilidades'? 'active navbar-link':'navbar-link'} onClick={ () => atualizar_link_ativo('habilidades')}>Minhas Habilidades</Nav.Link>
                <Nav.Link href="#projetos" className={link_ativo === 'projetos'? 'active navbar-link':'navbar-link'}  onClick={ () => atualizar_link_ativo('projetos')}>Projetos</Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://www.instagram.com/juanfarias_tk/" target="_blank"><img src={icon_Instagram} alt=""></img></a>
                    <a href="https://www.linkedin.com/in/juanfariastk/" target="_blank"><img src={icon_LinkedIn} alt=""></img></a>
                </div>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
 }
    
