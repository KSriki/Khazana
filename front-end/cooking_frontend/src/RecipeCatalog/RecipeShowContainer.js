import React, {
    Fragment,
    Component
} from 'react'
import {
    withRouter
} from 'react-router-dom';
import {
    connect
} from "react-redux";
import {
    fetchRecipes
} from "../redux/actions";
import RecipeCard from "../components/RecipeCard"



class RecipeShowContainer extends Component {

    //state is local here - dont need redux

    constructor(props) {
        super(props)
        this.state = {
            recipe: {}
        }
    }

    componentDidMount() {
     
        let token = localStorage.getItem('token')
        fetch(`http://localhost:3000/recipes/${this.props.match.params.id}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }).then(res => res.json())
            .then(json => {
                this.setState({recipe: json})

            })
    }


    render() {



        return ( <div> Recipe Show page </div>)
        }


    }


    export default withRouter(RecipeShowContainer);