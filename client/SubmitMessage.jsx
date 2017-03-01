import React, { Component } from 'react';
import { Messages } from '/lib/messages';

export class SubmitMessage extends React.Component { 
	constructor(props) {
		super(props);
		
	}

	submitMessage(e) {
		e.preventDefault();
		const message = e.target.message.value;
	  	Messages.insert({
	  		message,
	  		date: new Date()
	  	});
	  	e.target.message.value = '';
	}

	render() {
		return (
		  <form id="sendMessage" onSubmit={this.submitMessage}>
		    <input type="text" name="message" placeholder="Type a message..." />
		  </form>
		);
	}
}