import React, {Component} from 'react'

export default class Form extends Component{
  render(){
  	// console.log(this.props.onClick);

  	let {onClick, onChange} = this.props;
  	// let status = "Not DONE";

    return(
      <form onSubmit={onClick}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Title</label>
          <input type="input" className="form-control" name="todo" onChange={onChange} />
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    );
  }
} 