import { Col, Form } from 'react-bootstrap'

const InputPeople = ({ type, label, name, handleChange, reference }) => {
  return (
    <Col>
      <Form.Floating>
        <Form.Control
          type={type}
          name={name}
          ref={reference}
          onChange={handleChange}
        />
        <Form.Label> {label} </Form.Label>
      </Form.Floating>
    </Col>
  )
}
export default InputPeople
