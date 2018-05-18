import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Shop.css';

class Shop extends Component {
    constructor(props) {
      super(props);
      this.state = {
        all: 0
      };
    }
    toggle() {
        const { toggleMock } = this.props;
        toggleMock()
    }
    render() {
        return (
            <div className="shop">
                <div className="view">
                    <div className="alret" onClick={this.toggle.bind(this)}>
                        <i className="iconfont icon-gouwuche"></i>
                        <div
                        className={this.props.count <= 0 ? "count hide": "count"}>
                        <b>{this.props.count}</b>
                        </div>
                    </div>
                    <div className="msg">
                        <b>￥{this.props.all}</b>
                    </div>
                </div>
                <div className={this.props.count <= 0 ? "end gray": "end"}>去结算</div>
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    let all = 0;
    let count = 0;
    state.MainData.List.forEach((item, idx) => {
        item.product.forEach((itm, ind) => {
            all += itm.count * itm.price;
            count += itm.count;
        });
    });
    return {
        all: all,
        count: count
    }
}


export default connect(mapStateToProps)(Shop);
