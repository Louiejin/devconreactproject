import React, { Component } from 'react';


export default class TableBody extends Component{
	render(){
		let data = this.props.data;
		
		let tableBody = data.map((data, idx)=>
			<tr key={idx}>	
			<th scope="row">
	      <input type='checkbox' value={data.id}/>
      </th>
	      <td>{data.title}</td>
	      <td>{data.status}</td>
      </tr>
		);

		return(
			<tbody>
	     		{tableBody} 
      </tbody>
		);
	}
}
