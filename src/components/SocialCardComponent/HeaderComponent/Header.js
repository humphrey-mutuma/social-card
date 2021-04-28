import React, { Component } from 'react'

class Header extends Component {
  constructor(props){
    super(props);
    this.state={
      title:'',
      author:{
        name:'',
        tag:'@name'
      }
    }
  }
  render() {
    return (
      <div >
        <h4>The Practical Dev <span>@ThePracticalDev</span> Sep 10 </h4>
        <p>Learning React? Start Small.</p>
        <p><a href="#">author: @humphreymutuma7</a></p>
      </div>
    )
  }
}
export default Header;