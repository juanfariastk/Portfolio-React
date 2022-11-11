import {Col} from 'react-bootstrap'
export const Cards = ({nome, descricao, img}) =>{
    return(
        <Col size={12} sm={6} md={4}>
            <div className="projetos-imagens proj-zoom-out">
                <img src={img}/>
                <div className="projetos-texto">
                    <h4>{nome}</h4>
                    <span>{descricao}</span>
                </div>
            </div>
        </Col>
    )
}