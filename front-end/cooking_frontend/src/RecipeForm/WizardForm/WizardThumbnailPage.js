import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'
import renderFileInput from './renderFileInput'
import {Header, Form, Button, Icon, Divider } from 'semantic-ui-react'
import formDescription from './renderDescription';

const WizardFormThumbnailPage = props => {
  const { handleSubmit,previousPage } = props
  
  return (
    <Form onSubmit={handleSubmit}>
     <Header>Upload a Thumbnail!</Header>
     <Field
        name="thumbnail"
        type="file"
        accept='.jpg, .png, .jpeg'
        component={renderFileInput}
        label="Thumbnail"
      />
      <Divider section />
      <div>
      <Button primary type="button" className="previous" onClick={previousPage}>
          Previous
        </Button>
      <Button primary type="submit" className="next">
        Continue <Icon name='right chevron' />
      </Button>
      
      </div>
    </Form>
  )
}

export default reduxForm({
  form: 'create_recipe', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormThumbnailPage)