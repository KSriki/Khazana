
import React, {Component} from 'react'
import { Field, FieldArray, FormSection, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'
import {Header, Form, Button, Icon, Divider,List } from 'semantic-ui-react'
import { connect } from 'react-redux';
const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false

  
  const renderCheckbox = ({ input, label, type, meta: { touched, error } }) => (
      
      <div>
      <label>{label}</label> <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
  
  )
  

  const renderSteps = ({ fields, ingredients, meta: { touched, error } }) => (
    <div>
    
      <div>
        <Button positive type="button" onClick={() => fields.push({})}>Add Step</Button>
      </div>
      <List>
      {fields.map((step, index) =>
        <List.Item><div key={index}>
          
          <Field
            name={`${step}.instruction`}
            type="text"
            component={renderField}
            label={`Instruction ${index+1}`}/>
          <FormSection>
          <h4> Ingredients used during step: </h4>

        { 
          
          ingredients ? ingredients.map((ingredient, idx) => {
      
          const name = `${step}.step_ingredients`
            
            const checkedField = `${step + index}.step_ingredients.${idx}`

          return (
              <Field
                onChange={e => {console.log(e.currentTarget);}}
                key={idx}
                name={`${name}.${ingredient[idx].name}`}
                type="checkbox"
                component={renderCheckbox}
                label={ingredient[idx].name}
              />            
          )
        }) : null
        
        }
      </FormSection>
        </div>
        {touched && error && <span>{error}</span>}
        </List.Item>
      )}
      
      </List>
    </div>
  )
  
  

class WizardFormThirdPage extends Component {

  render(){

  // const { handleSubmit, pristine, previousPage, submitting } = this.props

  // step_num": 1,
  // "step_image": null,
  // "instruction": "Take 2 slices of bread and toast them",
  // "step_ingredients": [
  // {
  // "amount": "2 slices",
  // "ingredient": {
  // "name": "Bread",
  // "pyramid": "Carbs"
  // }
  // }
  // ]

  return (
    <form onSubmit={this.props.handleSubmit}>
          <FieldArray name="steps" component={renderSteps} ingredients={this.props.ingredients}/>
          <Divider section />
      <div>
        <button type="button" className="previous" onClick={this.props.previousPage}>
          Previous
        </button>
        <button type="submit">
          Submit
        </button>
      </div>
    </form>
  )
  }
}


const mapStateToProps = state => {
  return {
    ingredients: state.form.create_recipe.values.ingredients
  }
}

WizardFormThirdPage = connect(mapStateToProps,null)(WizardFormThirdPage)


export default reduxForm({
  form: 'create_recipe', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormThirdPage)