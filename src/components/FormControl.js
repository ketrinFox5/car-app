const { Form, Button } = require("react-bootstrap");

function FormControl () {
    return(
        <div>
            <Form>
            <Form.Group controlId="formBasicText">
                 <Form.Label>Модель машины</Form.Label>
                <Form.Control type="text" placeholder="Введите модель машины" />
                {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text> */}
            </Form.Group>
            <Form.Group controlId="formBasicText">
                <Form.Label>Номер машины</Form.Label>
                 <Form.Control type="text" placeholder="Введите номер машины" />
            </Form.Group>
            <Form.Group controlId="formBasicText">
                <Form.Control type="text" placeholder="Введите номер машины" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </div>
        
    )
}

export default FormControl;