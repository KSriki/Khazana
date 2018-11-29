import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'
import {Header, Form, Button, Icon, Divider } from 'semantic-ui-react'

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false



  const renderMembers = ({ fields, meta: { touched, error } }) => (
    <ul>
      <li>
        <Button positive type="button" onClick={() => fields.push({})}>Add Ingredient</Button>
        {touched && error && <span>{error}</span>}
      </li>
      {fields.map((member, index) =>
        <li key={index}>
          <Button
            type="button"
            title="Remove Ingredient"
            onClick={() => fields.remove(index)}>
          <h4>Remove Ingredient #{index + 1}</h4>
          </Button>
          <Field
            name={`${member}.firstName`}
            type="text"
            component={renderField}
            label="First Name"/>
          <Field
            name={`${member}.lastName`}
            type="text"
            component={renderField}
            label="Last Name"/>
  
        </li>
      )}
    </ul>
  )
  
  
  const WizardFormSecondPage = (props) => {
  const { handleSubmit, submitting, previousPage } = props
    return (
      <form onSubmit={handleSubmit}>
        <FieldArray name="members" component={renderMembers}/>
        
        <Divider section />
      <div>
      <Button primary type="button" className="previous" onClick={previousPage}>
          Previous
        </Button>
      <Button primary type="submit" className="next">
        Next <Icon name='right chevron' />
      </Button>
      
      </div>
      </form>
      
    )
  }


export default reduxForm({
  form: 'wizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormSecondPage)