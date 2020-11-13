import Axios from 'axios';
import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            initial: '',
            data: ''
        };
    }

    componentDidMount() {
        Axios.get('/getData')
            .then((response) => {
                this.setState({
                    data: response.data
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        if(!this.state.data) {
            return(
                <div>Loading</div>
            )
        } else {
            console.log(this.state.data)
            return(
                <div>React Is Working</div>
            )
        }
    }
}

export default App;