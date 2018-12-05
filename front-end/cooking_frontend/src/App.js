import React, { Fragment, Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect, withRouter } from 'react-router-dom';
// import Profile from './components/profile'
import { connect } from 'react-redux';



import LoginForm from './components/loginForm';
import Profile from './Profile/profile';
import './App.css';
import Nav from './navigation/nav';
import NotFound from './components/notFound';
import WizardForm from './RecipeForm/WizardForm/WizardForm';



import { fetchUser, fetchRecipes, fetchCreateRecipe } from './redux/actions';
import RecipeCatalog from './RecipeCatalog/RecipeCatalog';
import RecipeShowContainer from './RecipeCatalog/RecipeShowContainer';
import SignUpForm from './components/SignUpFormComponent';
import {  Icon, Menu, Segment, Sidebar } from 'semantic-ui-react';

class App extends Component {
	constructor() {
		super();
		this.state = {
			visible: false,
		};
	}

	handleClick = () => {
		let flip = this.state.visible;
		flip = !flip;
		this.setState({ visible: flip });
	};

	handleSidebarHide = () => this.setState({ visible: false });

	handleHomeClick = () => {
		this.props.history.push('/');
		if(this.state.visible){
			this.handleClick();
		}
  };
  handleProfileClick = () => {
		this.props.history.push('/profile');
		this.handleClick();
  };
  handleLoginClick = () => {
	this.props.history.push('/login');

	this.handleClick();
};

handleCreateClick = () => {

	this.props.history.push("/profile/create")
	if(this.state.visible){
		this.handleClick();
	}
}


// handleSignUp = (event) => {
// 		//event form
// 		debugger;
// }

	componentDidMount() {
		this.props.fetchUser();
		this.props.fetchRecipes();
	}

	handleContextRef = contextRef => this.setState({ contextRef });




	handleGoToSignUp = () => {
		this.props.history.push("/signup")
		if(this.state.visible){
			this.handleClick();
		}
	}
	
	handleSubmit = (event) => {
		//check form from redux
		//post here
		
		//go back to profile page or to the show page for that recipe
		console.log(this.props.form.values)
		
		this.props.fetchCreateRecipe(this.props.form.values)

	}

	render() {
		return (
			<div style={{ height: '100vh' }}>
			
						<Nav sidebarToggle={this.handleClick} visible={this.state.visible} handleHomeClick={this.handleHomeClick} handleLogout={() => {if(this.state.visible) { this.handleClick() } }}/>

        
				<Sidebar.Pushable as={Segment}>
					<Sidebar
						as={Menu}
						animation="overlay"
						icon="labeled"
						inverted
						vertical
						visible={this.state.visible}
						width="thin"
					>
						
            {this.props.userInfo ? <Menu.Item as="a" onClick={this.handleProfileClick}>
							<Icon name="user" />
							Profile
						</Menu.Item> : <Menu.Item
          as="a"
          onClick={this.handleLoginClick}
        > Login </Menu.Item>   }
            
					</Sidebar>

					<Sidebar.Pusher>
						<Segment basic>
							<Switch>
								<Route exact path="/" render={RecipeCatalog} />
								<Route path = "/recipes/:id" render={RecipeShowContainer} />>
								<Route exact path="/login" render={() => <LoginForm handleGoToSignUp={this.handleGoToSignUp} />} />
								<Route exact path="/signup" render={() => <SignUpForm  />} />
								<Route exact path="/profile/create" render ={() =>   <WizardForm handleSubmit={this.handleSubmit}/>} />
								<Route exact path="/profile" render={() => <Profile handleCreate={this.handleCreateClick}/>} />
								
								<Route component={NotFound} />
							</Switch>
						</Segment>
					</Sidebar.Pusher>
				</Sidebar.Pushable>
			</div>
		);
	}
}

// maps the 'loadProfile' action creator to 'App.js' props. When executed, this
// kicks off the cycle from 'action' => 'reducer' => 'update state'.
// (i.e. it dispatches the action created BY the loadProfile function)
//saves user info if the user is already logged in by checking out the localeStorage for token

const mapDispatchToProps = dispatch => {
	return {
		fetchUser: () => dispatch(fetchUser()),
		fetchRecipes: () => dispatch(fetchRecipes()),
		fetchCreateRecipe: (create_recipe) => dispatch(fetchCreateRecipe(create_recipe))
	};
};

const mapStateToProps = state => {
	return {
		userInfo: state.recipes.userInfo,
		form: state.form.create_recipe
	};
};

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(App)
);
