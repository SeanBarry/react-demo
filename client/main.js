import { Template } from 'meteor/templating';
import { Messages } from '/lib/messages';
import moment from 'moment';


Template.MessageList.helpers({
  messages() {
    return Messages.find({}, { sort: {time: -1 }});
  },
});


Template.Message.helpers({
  formatDate(date) {
    return moment(date).format('ddd, H:mma');
  },
});


Template.Message.onRendered(function() {
  console.log('Message ID: ' + this.data._id + ' has been rendered!');  
});


Template.Message.onDestroyed(function() {
  console.log('Message ID: ' + this.data._id + ' has been destroyed!');  
});


Template.Message.events({
  'click .delete': function(event) {
    event.preventDefault();
    const messageId = this._id;

    Messages.remove({
      '_id': messageId
    });

  },
});


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