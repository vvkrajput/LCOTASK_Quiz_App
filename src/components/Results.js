import React, { Component } from 'react'

class Results extends Component {
    render(){
      const score = this.props.score;
      const total = this.props.total;
      return(
        <div className="lcoresult">
          <h4>You Got {score} out of {total*10}</h4>
          <hr />
        </div>
      );
      
    }
  }

export default Results
