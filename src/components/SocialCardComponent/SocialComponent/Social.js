import React, { Component } from 'react'
import './Social.css';
import logo from "../../../images/logo192.png";

 class Social extends Component {
  render() {
    return (
      <div className="Social">
        <section>
          <div className="FullAvator" >
            <h1 >Dev</h1>
          </div>
        </section>
        <section className="text">
          <h1>Learning React? Start Small</h1>
        </section>
        <section className="name">
          <div>
            <span>Humphrey Mutuma </span>
            <span className="image"> <img width='30px' src={logo} alt=""/></span>
          </div>
        </section>
      </div>
    )
  }
}
export default Social;