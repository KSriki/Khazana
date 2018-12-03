import React from 'react'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'

const formDescription = ({ input, type,  meta: { touched, error, warning } }) => (
    <div>
    <Form.Field {...input} control="textarea" label='Description' rows='3' style={{border: '1px solid black'}}/>
    {touched && error && <span>{error}</span>}
    </div>
)

export default formDescription;