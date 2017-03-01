import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Messages } from '/lib/messages';
import AppContainer from './AppContainer';
import moment from 'moment';

Meteor.startup(() => {
  render(<AppContainer />, document.getElementById('app'));
});


//////////////////////    App    //////////////////////
export class App extends React.Component {
  constructor(props) {
  	super(props);
  	
  }
 
  render() {
    return (
      <div className="wrapper">
	    <div className="title">
	      <h1>Messaging Application</h1>
	    </div>

	    <div className="content">
	      <MessageList messages={this.props.messages} />
	    </div>

	    <div className="form">
	      <SubmitMessage />
	    </div>
	  </div>
    );
  }
}


///////////////////// MessageList /////////////////////
const renderMessages = (messages) => {
	return messages.length > 0 ? messages.map((message) => {
			return <Message key={message._id} message={message} />
		}) :
		<div className="message">
			<div className="text">
				No Messages Found
			</div>
		</div>
}

const MessageList = ({messages})=> {
	return (
		<div>
			{renderMessages(messages)}
		</div>
	)
}


///////////////////// SubmitMessage /////////////////////
class SubmitMessage extends React.Component { 
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

///////////////////// Message /////////////////////
class Message extends React.Component {
	constructor(props) {
		super(props);
		this.formatDate = this.formatDate.bind(this);
		this.deleteMessage = this.deleteMessage.bind(this);
	}

	componentDidMount() {
		console.log('Message ID: ' + this.props.message._id + ' has been rendered!')
	}

	componentWillUnmount() {
		console.log('Message ID: ' + this.props.message._id + '  has been destroyed!');
	}

	formatDate(date) {
		return moment(date).format('ddd, H:mma');
	}

	deleteMessage(id) {
		return Messages.remove(this.props.message._id)
	}

	render() {
		const { message } = this.props;
		return (
			<div className="message">
				<div className="delete" onClick={this.deleteMessage}>
					X
				</div>
				<div className="text">
					{message.message}
				</div>
				<div className="time">
					{this.formatDate(message.date)}
				</div>
			</div>
		)
	}
}