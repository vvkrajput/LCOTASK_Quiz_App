import React, { Component } from 'react'

class Scorebox extends Component {
    render(){
      return(
        <div className="lcoheader">
          <h3>Question {this.props.current} out of {this.props.total}<br/>
          Correct Answer +10<br/>
          Wrong Answer -3</h3>
        </div>
      )
    }
  }

export default Scorebox
