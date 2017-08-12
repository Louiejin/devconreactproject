import React, { Component } from 'react';
import TableBody from './TableBody'


export default class TableMain extends Component{

  render(){
  	let {data} = this.props;
    return(
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Status</th>
            </tr>
          </thead>
   				<TableBody data={data}/>
        </table>
      </div>
    )
  }
}