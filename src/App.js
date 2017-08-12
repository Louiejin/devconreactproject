import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';

//mode compoment
import Form from './component/Form'
import TableMain from './component/TableMain'

// var defData =;

class App extends Component{
  constructor(){
    super();

    this.state = {
      list: [],
      action:'Add',
      data:{
        title:'',
        status:false
      },
      filter:'done' 
    }

    this.addList = this.addList.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    axios({
        url:'http://localhost:4000/customer',
        method:'GET'
      }).then(
        res => this.setState({list:res.data })
      ).catch(
        err => console.log(err)
      )
  }

  addList(e,fields){
    // console.log('hey',this.state);
    // e.preventDefault();
// 
    axios({
      url: 'http://localhost:4000/customer',
      method: 'POST',
      data:{title: 'qwert', 'status':true}
    }).then(function(data){
      console.log(data)
    }).catch(function(err){
      console.log(err)
    })

    // axios({
    //   url:'http://localhost:4000/customer',
    //   method:'POST',
    //   data:{this.state.data}
    // }).then(
    // ).catch(err => console.log(err))
  }

  onChange(e){
    console.log("has changed",e.target.value);
    let {data} = this.state;
    this.setState({data:{...data,title:e.target.value}});
  }

  render(){
    console.log(this.state.data);
    return(
      <div className='container'>
        <Form onClick={this.addList} onChange={this.onChange}/>
        <TableMain data={this.state.list}/>
      </div>
    );
  }
}

export default App;
