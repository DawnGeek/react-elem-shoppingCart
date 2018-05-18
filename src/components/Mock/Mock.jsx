import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Mock.css';

class Mock extends Component {
    calcFn(flag, idx, ind) {
        this.props.dispatch({
            type: 'WS',
            idx,
            ind,
            flag
        });
    }
    empty() {
        this.props.dispatch({
            type: 'EMPTY'
        });
    }
    hide(e) {
        if (e.target.getAttribute("class") === 'mock') {
            const { toggleMock } = this.props;
            toggleMock()
        }
    }
    render() {
        const { mockFlag } = this.props;
        return (
            <div ref="mock" className={ mockFlag === true ? "mock" : "mock hide"} onClick={this.hide.bind(this)}>
                <div className="alret">
                    <div className="title">
                        <b>下单减4元,再买<span>18元</span>可减<span>6元</span>(在线支付专享)</b>
                    </div>
                    <div className="mock-main">
                        <div className="mock-main-section">
                            <div className="section-title one">
                                <b>1号口袋</b>
                                <em onClick={this.empty.bind(this)}>清空购物车</em>
                            </div>
                            {
                                this.props.shopCar.map((item, idx) => {
                                    return (
                                        item.product.map((area, ind) => {
                                            if(area.pitch) {
                                                return (
                                                    <div className="section-content" key={ind}>
                                                        <b>{area.text}</b>
                                                        <div className="msg">
                                                        <div className="mock-price">¥ {area.price}</div>
                                                        <div className="mock-btnBox">
                                                            <span onClick={this.calcFn.bind(this, '-', idx, ind)}>-</span>
                                                            <b>{area.count}</b>
                                                            <span onClick={this.calcFn.bind(this, '+', idx, ind)}>+</span>
                                                        </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        })
                                    )
                                })
                            }
                        </div>
                        <div className="mock-main-section">
                            <div className="section-title other">2号口袋<span>
                            (如需分装长按商品托入此口袋)</span></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        shopCar: state.MainData.List
    }
}

export default connect(mapStateToProps)(Mock)
