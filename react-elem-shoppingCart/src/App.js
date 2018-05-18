import React, { Component } from 'react';
import './App.css';
import './assets/css/common/reset.css';
import './assets/css/fonts/iconfont.css';

import Header from './components/Header';
import Main from './components/Main';
import Shop from './components/Shop';
import Mock from './components/Mock';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mockFlag: false
        }
    }
    toggleMock() {
        const flag = this.state.mockFlag;
        this.setState({
            mockFlag : !flag
        });
    }
    render() {
        const { mockFlag } = this.state;
        return (
            <div className="App">
                <Header/>
                <Main/>
                <Shop toggleMock={ this.toggleMock.bind(this) }/>
                <Mock mockFlag={ mockFlag } toggleMock={ this.toggleMock.bind(this) }/>
            </div>
        );
    }
}

export default App;
