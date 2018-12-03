import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'
import {Header, Form, Button, Icon, Divider } from 'semantic-ui-react'
import formDescription from './renderDescription';

const WizardFormFirstPage = props => {
  const { handleSubmit } = props
  return (
    <Form onSubmit={handleSubmit}>
        <Header>General Information</Header>
      <Field
        name="title"
        type="text"
        component={renderField}
        label="Title"
      />
      <Field
        name="time"
        type="text"
        component={renderField}
        label="Time"
      />
      <Field
        name="category"
        type="text"
        component={renderField}
        label="Category"
      />
      <Field
        name="description"
        type="text"
        component={formDescription}
        label="Description"
      />
      <Divider section />
      <div>
      <Button primary type="submit" className="next">
        Next <Icon name='right chevron' />
      </Button>
      
      </div>
    </Form>
  )
}

export default reduxForm({
  form: 'wizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormFirstPage)