import React from 'react'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'
 const formInstruction = ({ input, type,  meta: { touched, error, warning } }) => (
    <Form>
    <Form.Field {...input} control="textarea" label='Instruction' rows='3' />
    {touched && error && <span>{error}</span>}
    </Form>
)
 export default formInstruction;