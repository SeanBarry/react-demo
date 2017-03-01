import React, { Component } from 'react';
import { MessageList } from './MessageList';
import { SubmitMessage } from './SubmitMessage';

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