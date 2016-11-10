import React from 'react';
import ajax from 'superagent';

class SingleGist extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(<div>

            <li>{this.props.desc}</li>

        </div>)
    }
}
class UsersGists extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            gists: []
        }
    }

    componentWillMount() {
        // add Gists to state for given github username
        ajax.get(`https://api.github.com/users/${this.props.params.username}/gists`)
            .end((error, response) => {
                if (!error && response) {
                    this.setState({gists: response.body});
                    console.log("gist response", response);
                } else {
                    console.log(`Error fetching Gists.`, error);
                }
            })
    }

    render() {

        console.log(this.state.gists);
        return (<div>
            <h2>Gist</h2>


            {/*<h3>Gits of user: <a href={this.state.gists[0].owner.login}> {userName}</a></h3>*/}

            { this.state.gists.map((gist, index) => {

                const desc = gist.description; // gist desc
                const urlApi = gist.url; // api url
                const createdAt = gist.created_at; // created date
                const userName = gist.owner.login; // username
                const userNameUrl = gist.owner.html_url; // link to user

                return (<div>


{/*                    <li key={index}>

                        <a href={urlApi}><h2>{desc}</h2></a>
                        <time>{createdAt}</time>

                    </li>*/}
                    <SingleGist desc={desc}/>

                </div>)
            }) }

        </div>)
    }
}

export default UsersGists;