import React, { Component } from 'react';
import { connect } from 'react-redux';
import BScroll from 'better-scroll';
import './Main.css';

class Main extends Component {
    constructor(props) {
      super(props);
      this.state = {
        activeIdx: 0,
        scroll: null,
        arr: []
      };
    }
    componentWillMount() {

    }
    componentDidMount() {
        this.refs.main.style.height = this.refs.main.offsetHeight - 50 +'px';
        this.refs.aside.style.height = this.refs.aside.offsetHeight - 50 +'px';
        this.refs.myBox.style.height = this.refs.myBox.offsetHeight - 50 +'px';

        this.setState({
            scroll: new BScroll(this.refs.myBox, {
                click: true,
                bounce: true,
                startY: 0,
                probeType: 3
            })
        })

        let arr = [];
        for(let i = 0; i < document.querySelectorAll('.content').length; i++) {
            arr.push(document.querySelectorAll('.content')[i].offsetTop)
        };

        this.setState({
            arr: arr
        });

        setTimeout(() => {
            this.state.scroll.on('scroll', (pos) => {
                let y = parseInt(Math.abs(pos.y));
                for(let i = 0; i < this.state.arr.length; i++) {
                    if(y === this.state.arr[i]) {
                        this.setState({
                            activeIdx: i
                        });
                    }
                }
            })
        },0);

    }
    toggleFn(idx) {

        this.state.scroll.scrollTo(0, -this.state.arr[idx],1000);

        this.setState({
            activeIdx: idx
        });

    }
    calc(flag, idx, ind, e) {
        this.props.dispatch({
            type: 'WS',
            idx,
            ind,
            flag
        });

        if(flag === '+') {
            const oDot = document.createElement("em");
            oDot.className = 'oDot';
            e.target.appendChild(oDot);
            setTimeout(() => {
                var ele = document.querySelector('.oDot');
                ele.parentNode.removeChild(ele)
            },1000);
        };
    }
    render() {
        return (
            <main className="main" ref='main'>
                <aside ref='aside'>
                    <ul>
                        {
                            this.props.List.map((item, idx) => {
                                return (
                                    <li
                                    className= { this.state.activeIdx === idx ? 'active' : ''}
                                    key={idx}
                                    onClick={this.toggleFn.bind(this, idx)} >{item.text}</li>
                                )
                            })
                        }
                    </ul>
                </aside>
                <section ref="myBox"><div className="box" ref="box">
                    {
                        this.props.List.map((item, idx) => {
                            return (
                            <div className="content" key={idx} ref="content">
                                <h5>{item.text}</h5>
                                <ol>
                                    {
                                        item.product.map((itm, ind) => {
                                            return (
                                                <li key={ind}>
                                                    <dl>
                                                        <dt><img src={itm.img} alt={itm.title}/></dt>
                                                        <dd>
                                                            <h5>{itm.text}</h5>
                                                            <div className="msg">
                                                                <b>月售{itm.sold}</b>
                                                                <b>赞{itm.praise}</b>
                                                            </div>
                                                            <div className="priceMsg">
                                                                <b>￥ {itm.price}</b>
                                                                <div className="btnBox">
                                                                    <span
                                                                    className="plus"
                                                                    onClick={this.calc.bind(this, '+', idx, ind)}>+</span>
                                                                    <b
                                                                    className={itm.count <= 0 ? 'none': ''}>{itm.count}</b>
                                                                    <span
                                                                    onClick={this.calc.bind(this, '-', idx, ind)}
                                                                    className={itm.count <= 0 ? 'none': ''}
                                                                    >-</span>
                                                                </div>
                                                            </div>
                                                        </dd>
                                                    </dl>
                                                </li>
                                            )
                                        })
                                    }
                                </ol>
                            </div>
                            )
                        })
                    }</div>
                </section>
            </main>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        List: state.MainData.List
    }
}

export default connect(mapStateToProps)(Main)
