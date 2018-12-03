import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import WizardFormFirstPage from './WizardFormFirstPage'
import WizardFormSecondPage from './WizardFormSecondPage'
// import WizardFormThirdPage from './WizardFormThirdPage'
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect, withRouter } from 'react-router-dom';

import { Field, reduxForm } from 'redux-form'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'
import formDescription from './renderDescription';
import FieldArray from 'redux-form/lib/FieldArray';
import formIngredients from './renderIngredients';


//

//need to check if user is logged in before coming to the page.

class WizardForm extends Component {

  constructor(props) {
        super(props)
        this.nextPage = this.nextPage.bind(this)
        this.previousPage = this.previousPage.bind(this)
        this.state = {
          page: 1
        }
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }
    

  render(){
  const handleSubmit = this.props.handleSubmit;
  const user = this.props.userInfo;

  
   const page = this.state.page

  return user ? (

    page === 1 ? 
    (<form onSubmit={this.nextPage}>
      <div>
        <label htmlFor="title">Title</label>
        <Field name="title" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="time">Time</label>
        <Field name="time" component="input" type="text" />
      </div>
      <div>
        <Field name="description" component={formDescription} />
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <Field name="category" component="input" type="text" />
      </div>
      <div>
        <FieldArray name="ingredients" component={formIngredients} />
      </div>
      <button type="submit">Submit</button>
    </form>)
    : <WizardFormSecondPage
                previousPage={this.previousPage}
                onSubmit={handleSubmit}
              />

  ) : <Redirect to="/login" />
  }
}


const mapStateToProps = (state) => {
    return {
  		userInfo: state.recipes.userInfo,
  	};
  }
// create new, "configured" function
const createReduxForm = reduxForm({ form: 'create_recipe' })

// evaluate it for ContactForm component
 WizardForm = createReduxForm(WizardForm)

export default withRouter(connect(mapStateToProps,null)(WizardForm))


// export default reduxForm({
//   form: 'wizard', //Form name is same
//   destroyOnUnmount: false,
//   forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
//   validate
// })

// class WizardForm extends Component {
//   constructor(props) {
//     super(props)
//     this.nextPage = this.nextPage.bind(this)
//     this.previousPage = this.previousPage.bind(this)
//     this.state = {
//       page: 1
//     }
//   }
//   nextPage() {
//     this.setState({ page: this.state.page + 1 })
//   }

//   previousPage() {
//     this.setState({ page: this.state.page - 1 })
//   }

//   render() {
//     const { onSubmit } = this.props
//     const { page } = this.state

    
//     return this.props.userInfo ?
//      (
//       <div>
//         {page === 1 && <WizardFormFirstPage onSubmit={this.nextPage} />}
//         {page === 2 && (
//           <WizardFormSecondPage
//             previousPage={this.previousPage}
//             onSubmit={this.props.handleSubmit}
//           />
//         )}
//         {/* {page === 3 && (
//           <WizardFormThirdPage
//             previousPage={this.previousPage}
//             onSubmit={onSubmit}
//           />
//         )} */}
//       </div>
//     )
//     : <Redirect to="/login" />;
//   }
// }

// WizardForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired
// }

// const mapStateToProps = (state) => {
//   return {
// 		userInfo: state.recipes.userInfo,
// 	};
// }

// export default withRouter(connect(mapStateToProps,null)(WizardForm))