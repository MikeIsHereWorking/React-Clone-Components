import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import Container from './styles'
import data from './data';

class App extends React.Component {
    state = {}

    componentDidMount() {

    }

    render() {
        return <Container>
                <div>
                    <video src={data.videoURL} controls />
                    <div>{data.description}</div>
                    <div>show more</div>
                </div>
                <div>LIST</div>
        </Container>
    }
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)