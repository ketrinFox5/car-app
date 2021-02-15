import { useState } from "react";
import { Modal, Button, FormControl, Form } from "react-bootstrap";

function AddCar (props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = event => {
        event.preventDefault();
        event.stopPropagation();
        const formData = new FormData(event.currentTarget),
                formDataObj = Object.fromEntries(formData.entries());
        props.handleAddCar(formDataObj);
        handleClose();
    }
    return(
        <div>
            <Button variant="primary" onClick={handleShow}>
                Добавить машину
            </Button>
            <div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header >
                        <Modal.Title>Добавление машины</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formBasicText">
                                <Form.Label>Модель машины</Form.Label>
                                <Form.Control type="text" placeholder="Введите модель машины" name="carModel"/>
                            </Form.Group>
                            <Form.Group controlId="formBasicText">
                                <Form.Label>Номер машины</Form.Label>
                                <Form.Control type="text" placeholder="Введите номер машины" name="carNumber" />
                            </Form.Group>
                            <Form.Group controlId="formBasicText">
                            <Form.Label>Регион</Form.Label>
                                <Form.Control type="text" placeholder="Введите регион" name="region"/>
                            </Form.Group>
                            <Form.Group controlId="formBasicText">
                            <Form.Label>Причина записи на ТО</Form.Label>
                                <Form.Control type="text" placeholder="Введите причину" name="problem"/>
                            </Form.Group>
                            <Form.Group controlId="formBasicText">
                            <Form.Label>ФИО</Form.Label>
                                <Form.Control type="text" placeholder="Введите ФИО" name="userName"/>
                            </Form.Group>
                            <Form.Group controlId="formBasicPhone">
                            <Form.Label>Телефон</Form.Label>
                                <Form.Control type="text" placeholder="Введите телефон" name="userPhone"/>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Добавить
                            </Button>
                            <Button variant="secondary" onClick={handleClose}>
                            Отмена
                        </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    )
}

export default AddCar;