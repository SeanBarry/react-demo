import { Template } from 'meteor/templating';
import { Messages } from '/lib/messages';

Template.SubmitMessage.events({
  'submit #sendMessage':(event) => {
  	event.preventDefault();
  	const message = event.target.message.value;

  	Messages.insert({
  		message,
  		date: new Date()
  	});

  	event.target.message.value = '';
  },
});