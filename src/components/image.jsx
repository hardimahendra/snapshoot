import React from "react";
import { useState } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import { LoadImages, SearchImages } from "./api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function Image(props){
    const data = LoadImages();
    const [show, setShow] = useState(false);
    const [searchIt, setSearch] = useState()
    const search = () => {
        setSearch(query)
    }
    const searchData = SearchImages(searchIt)
    const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
    const [fullscreen, setFullscreen] = useState(true);
    function handleShow(breeakpoint){
        setFullscreen(breeakpoint);
        setShow(true);
    }
    return (
      <Container>
        <Row direction="horizontal" gap={3}>
            <Col className="pb-2">
                <img id='image' onClick={(e) => setShow(true)} src={props.src} />
            </Col>
        </Row>
        {values.map((v, idx) => (
            <Modal
            show={show}
            fullscreen={fullscreen}
            onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Custom Modal Styling
                </Modal.Title>
            </Modal.Header>   
            <Modal.Body>
                {data.map((img, key) => (
                        <>
                        <div className="modal-images">
                            <img src={img.urls.small} key={key} />
                            <h1>Name: {img.user.name}</h1>    
                            <h4>Location: {img.user.location}</h4> 
                            <div className="likes">
                                <FontAwesomeIcon className="icon" icon={faHeart} />
                                <p>{img.likes}</p>
                            </div>
                        </div>
                    </>
                ))}
            </Modal.Body> 
            </Modal>    
        ))}
      </Container>
    );
}

export default Image;