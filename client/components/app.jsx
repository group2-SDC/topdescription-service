import Axios from 'axios';
import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        Axios.get('/getData/0')
            .then((response) => {
                this.setState({
                    data: response
                })
            })
            .catch((error) => {
                console.log(error)
            })
        }

    render() {
        if(!this.state.data) {
            return (
                <div>Loading</div>
            )
        } else {
            return (
                <div>React Is Working</div>
            )
        }
    }
}

export default App;