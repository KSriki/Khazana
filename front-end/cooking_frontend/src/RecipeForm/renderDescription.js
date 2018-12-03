import React from 'react'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'
 const formDescription = ({ input, type,  meta: { touched, error, warning } }) => (
    <Form>
    <Form.Field {...input} control="textarea" label='Description' rows='3' />
    {touched && error && <span>{error}</span>}
    </Form>
)
 export default formDescription;