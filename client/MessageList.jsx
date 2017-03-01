import React, { Component } from 'react';
import { Message } from './Message';

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

export const MessageList = ({messages})=> {
	return (
		<div>
			{renderMessages(messages)}
		</div>
	)
}