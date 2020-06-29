import React, {Component} from 'react'

class Counter extends Component
{
  constructor()
  {
    super()
    this.state ={
      count : 10,
      i : 1,
    showMe: false}
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
    if (this.state.count < 0){ 
      clearInterval(this.timer);
      // alert('Out of time!')
      this.setState({ count : 0,
      showMe: true})
    }
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
    i : 1,
    showMe: false
  })
   
 }

render(){
  return(
   <div id = "page">
     <section class = "heading">COUNTER</section>
      <div class = "container">
        <div class = "screen">
          {this.state.count}
        </div>
        <div class="control">
        <button onClick = {this.HandleClickAdd} class="addbtn">
          +
        </button>
        <button onClick = {this.HandleClickSub} class="subbtn">
        -</button>
       </div>
        <div>
        <button onClick = {this.HandleClickStart} class="startstopbtn">
        START/STOP</button>
        </div>
        <div>
        <button onClick = {this.HandleClickReset} class="resetbtn">
        RESET</button>
       </div>
      </div>
      {
      
        this.state.showMe?<div class = "alert">
          <p class='txt'>
        Out of time</p>
        <button onClick = {this.HandleClickReset} class = "alertbtn">Close</button>
      </div>
      :null}
      
    </div>
  )}
}
export default Counter