import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import {connect} from 'react-redux';
import {createPolicy} from '../actions'
import { propTypes } from 'react-bootstrap/esm/Image';

const App = ()=>{

    const handlerCreate =()=>{
        console.log('crear poliza');
        const test = createPolicy('Manuel', 100);
        console.log('test: ', test);
    }

    let nombre 
    const nombreRef = React.createRef()
    const montoRef = React.createRef()

    return (
        <Container>
            <Form>
                <h1>Crear Poliza</h1>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre"
                    onChange={(e)=>nombre.e.target.value} />
                    <Form.Text className="text-muted">
                    Nombre del solicitante de poliza
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Monto poliza</Form.Label>
                    <Form.Control type="text" placeholder="$" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handlerCreate}>
                    Crear Poliza
                </Button>
            </Form>
            <hr class="mt-5 mb-5"></hr>
            <h1>Crear Reclamo</h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre" />
                    <Form.Text className="text-muted">
                    Nombre del solicitante de reclamo
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Comentarios</Form.Label>
                    <Form.Control type="text" placeholder="detalles" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Crear Reclamo
                </Button>
            </Form>


        </Container>
    )
}
const mapStateToProps = (state) =>{
    return{
        policiesNames: state.listPolicies
    }
}
export default connect(mapStateToProps, {createPolicy})(App)

