import React from 'react'
import { Form, Input, TextArea, Button, Icon } from 'semantic-ui-react'
import renderField from './renderField'
import { Field, reduxForm } from 'redux-form'
const formIngredients = ({fields, meta: {touched, error}}) => (
    
        <div>
          <label>Ingredients:</label>
          <div>
            {fields.map((ingredient, index) =>
              <div key={index} className="ml10">
                <Field name={`${ingredient}.name`} component={renderField} type="text" label="Ingredient Name"  />
                <Field name={`${ingredient}.amount`} component={renderField} type="text" label="Amount" />
                {/* maybe do a drop down for meat, vegetable, fruit, grain etc. */}
                {/* <Field name={`${ingredient}.pyramid`} component={renderField} type="text" label="Pyramid"  />
             */}
                <Button title="Remove" onClick={() => fields.remove(index)}><Icon name="trash"></Icon> </Button>
              </div>

            )}
          </div>
          <br />
          <button type="button" onClick={() => fields.push({})}>Click to add ingredients</button>
          <br /><br/>
        </div>
)

export default formIngredients;