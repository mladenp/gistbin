import React from 'react';
import { Router, IndexLink, browserHistory } from 'react-router';

class App extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            username: ''
        }
    }

    getUsernameValue(event) {
        console.log(event);
        // Because of SyntheticEvent Recycling
        var username = event.target.value;
        this.setState({
            username: username
        });
    }

    getGistData() {
        // Go to /user/:username router
        this.props.history.pushState(null, `/user/${this.state.username}`);
    }

    render() {
        return (
            <div>
                <h1>Better Gist prototype</h1>
                <br/>
                <h2><IndexLink to="/"> Home </IndexLink></h2>

                <label htmlFor="gist_username">Gist Username</label>
                <input type="text" name="gist_username" onChange={this.getUsernameValue.bind(this)}/>
                <button type="button" onClick={this.getGistData.bind(this)}>Get Gists</button> <br/>


                { this.props.children }

            </div>
        )
    }
}


export default App;