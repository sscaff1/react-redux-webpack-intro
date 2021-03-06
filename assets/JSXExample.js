import React, { Component } from 'react';

export default class Example extends Component {
	state = {
		clickCount: 0
	};

	increment = () => {
		this.setState(prevState => ({
			clickCount: prevState.clickCount + 1
		}));
	};
	render() {
		return (
			<div>
				<button onClick={this.increment}>I've clicked this button {this.state.clickCount} times!</button>
				<style jsx>{`
					button {
						padding: 10px 20px;
						background-color: lightcoral;
						margin-top: 20px;
					}
				`}</style>
			</div>
		);
	}
}
