import React, {Component} from 'react'

class Counter extends Component
{
  constructor()
  {
    super()
    this.state ={
      count : 10,
      i : 1}
    //  bool = 'true'
   
   
   this.HandleClickAdd = this.HandleClickAdd.bind(this)
   this.HandleClickSub = this.HandleClickSub.bind(this)
   this.HandleClickStart = this.HandleClickStart.bind(this)
   this.HandleClickReset = this.HandleClickReset.bind(this)
   
 }
 HandleClickAdd()
 {
   this.setState({count : this.state.count + 1})
 }
 HandleClickStart()
 {if(this.state.i != 0)
  {
    console.log('Counter start')
  
   this.setState({
     i : 0
   });
  

    if(this.state.count>0)
    this.timer = setInterval(() => this.Count(), 1000);
  }
    if(this.state.i == 0) 
    { console.log('Counter stop');
    clearInterval(this.timer);
    this.setState({
      count: this.state.count
    });
    this.setState({
      i : 1
    });
    }
    
   
 }

 Count()
 {  
    this.setState({
      count: this.state.count - 1
    })
    if (this.state.count < 1){ 
      clearInterval(this.timer);
    this.setState({ count : 0})}
 }

 HandleClickSub()
  {
    console.log('sub called')
    this.setState({count : this.state.count - 1})
    if( this.state.count <= 0)
    {
      this.setState({
      count: 10,

    })
    alert('Out of time!')
    }
  }
HandleClickReset()
 {
  this.setState({
    count: 10,
    i : 1
  })
   
 }

render(){
  return(
    <body>
      <div class = "container">
      <div>
        Counter
      </div>
      <div>
        {this.state.count}
      </div>
      <div>
        <button onClick = {this.HandleClickAdd}>
          ADD
        </button>
      </div>
      <div>
        <button onClick = {this.HandleClickSub}>
        SUB</button>
      </div>
      <div>
        <button onClick = {this.HandleClickStart}>
        START/STOP</button>
      </div>
      <div>
        <button onClick = {this.HandleClickReset}>
        RESET</button>
      </div>
      </div>
    </body>
  )}
}
export default Counter