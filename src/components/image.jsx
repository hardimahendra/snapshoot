import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
function Image(props){
    return (
        <Container> 
            <Row>
                <Col className="pb-2">
                    <img src={props.src}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Image;