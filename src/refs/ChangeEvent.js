import React, {Component} from 'react';
class ChangeEvent extends Component{
			constructor(props){
				super(props);
				this.state={userName:""}
			}

		onChangeHandler=(event)=>{
				this.setState({userName:event.target.value})
		}
	render(){
		return(
			<div>
				<h1>This is React change Events</h1>
				Enter name :<input type="text" onChange={this.onChangeHandler}/>
				<button>click me</button><br/>
				Hi!! {this.state.userName}
			</div>);
	}
}
export default ChangeEvent;