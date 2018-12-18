
import React, {Component} from 'react'
import { Field, FieldArray, FormSection, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'
import renderInstruction from './renderInstruction'
import {Header, Form, Button, Icon, Divider,List } from 'semantic-ui-react'
import { connect } from 'react-redux';
var Infinite = require('react-infinite');

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


      {/* amounts at every step */}
      <div>
        <Button positive type="button" onClick={() => fields.push({})}>Add Step</Button>
      </div>
      <List>
      {fields.map((step, index) =>
        <List.Item><div key={index}>
          
          <Field
            name={`${step}.instruction`}
            type="text"
            component={renderInstruction}
            label={`Instruction ${index+1}`}/>
          <FormSection>
          <h4> Ingredients used during step: </h4>

          {/* what about ingredients that are empty */}
        { 
         
          ingredients && ingredients.length > 0 ? ingredients.map((ingredient, idx) => {
      
          const name = `${step}.step_ingredients[${idx}]`
            
            const checkedField = `${step + index}.step_ingredients.${idx}`
            console.log(checkedField)

            return !!ingredient[idx] ?  (
              <div>
              <Field
                onChange={e => {console.log(e.currentTarget);}}
                key={idx}
                name={`${name}.${ingredient[idx].name}`}
                type="checkbox"
                component={renderCheckbox}
                label={ingredient[idx].name}
              /> 
              <Field
                onChange={e => {console.log(e.currentTarget);}}
                name={`${name}.amount`}
                type="text"
                component={renderCheckbox}
                label={`Amount`}
              /> 
              </div>           
          ) : <div>Ingredient {idx+1} is missing information!</div>

        }) : <div>No Ingredients added yet. Go back!</div>
        
        }
      </FormSection>
      <Button negative
            type="button"
            title="Remove Step"
            onClick={() => fields.remove(index)}>
          <h4>Remove Step #{index + 1}</h4>
          </Button>
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
          <Infinite containerHeight={500} elementHeight={40}>
            <FieldArray name="steps" component={renderSteps} ingredients={this.props.ingredients}/>
          </Infinite>
          <Divider section />
      <div>
        <Button primary type="button" className="previous" onClick={this.props.previousPage}>
          Previous
        </Button>
        <Button primary type="submit">
          Submit
        </Button>
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