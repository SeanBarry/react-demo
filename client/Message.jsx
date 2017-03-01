import React, { Component } from 'react';
import { Messages } from '/lib/messages';
import moment from 'moment';

export class Message extends React.Component {
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