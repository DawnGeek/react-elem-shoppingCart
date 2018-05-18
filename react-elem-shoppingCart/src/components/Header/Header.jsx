import React, { Component } from 'react';
import './Header.css';
import axios from 'axios';


class Header extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <header>
                <span className="icon-fanhui"></span>
                <div className="search">
                    <div className="input">
                        <i className="icon-iconfontzhizuobiaozhun22"></i>
                        <input type="text"/>
                    </div>
                </div>
                <span className="iconfont icon-iconset0195"></span>
            </header>
        )
    }
}

export default Header
