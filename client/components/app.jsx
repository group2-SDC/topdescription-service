import Axios from 'axios';
import React from 'react';
import DescriptionHalf from './DescriptionHalf.jsx'
import CardComponent from './StyledComponents/CardComponent.js'
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        Axios.get('/getData/2')
            .then((response) => {
                this.setState({
                    data: response.data[0]
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
                <CardComponent>
                    <DescriptionHalf data={this.state.data}/>
                </CardComponent>
            )
        }
    }
}

export default App;