import React, {Component} from 'react'

import { connect } from 'react-redux'

import { Field, reduxForm } from 'redux-form'
import validate from './validate'
const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet']

const renderColorSelector = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option value="">Select a color...</option>
      {colors.map(val => (
        <option value={val} key={val}>
          {val}
        </option>
      ))}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
)

class WizardFormThirdPage extends Component {

  render(){
  debugger;
  const { handleSubmit, pristine, previousPage, submitting } = this.props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Favorite Color</label>
        <Field name="favoriteColor" component={renderColorSelector} />
      </div>
      <div>
        <label htmlFor="employed">Employed</label>
        <div>
          <Field
            name="employed"
            id="employed"
            component="input"
            type="checkbox"
          />
        </div>
      </div>
      <div>
        <label>Notes</label>
        <div>
          <Field name="notes" component="textarea" placeholder="Notes" />
        </div>
      </div>
      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" disabled={pristine || submitting}>
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