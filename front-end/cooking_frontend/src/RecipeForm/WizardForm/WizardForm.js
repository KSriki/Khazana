import React, { Component } from 'react'
import PropTypes from 'prop-types'
import WizardFormFirstPage from './WizardFormFirstPage'
import WizardFormSecondPage from './WizardFormSecondPage'
import WizardFormThirdPage from './WizardFormThirdPage'
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import WizardThumbnailPage from './WizardThumbnailPage';

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

  render() {
 
    const { page } = this.state

    
    return this.props.userInfo ?
     (
      <div>
        {page === 1 && <WizardFormFirstPage onSubmit={this.nextPage} />}
        {page === 2 && <WizardThumbnailPage        previousPage={this.previousPage} onSubmit={this.nextPage} />}
        {page === 3 && (
          <WizardFormSecondPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 4 && (
          <WizardFormThirdPage
            previousPage={this.previousPage}
            handleSubmit={this.props.handleSubmit}
          />
        )}
      </div>
    )
    : <Redirect to="/login" />;
  }
}

WizardForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
		userInfo: state.recipes.userInfo,
	};
}

export default withRouter(connect(mapStateToProps,null)(WizardForm))