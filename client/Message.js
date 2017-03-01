import { Template } from 'meteor/templating';
import { Messages } from '/lib/messages';
import moment from 'moment';

Template.Message.onRendered(function() {
  console.log('Message ID: ' + this.data._id + ' has been rendered!');  
});

Template.Message.onDestroyed(function() {
  console.log('Message ID: ' + this.data._id + ' has been destroyed!');  
});

Template.Message.helpers({
  formatDate(date) {
    return moment(date).format('ddd, H:mma');
  },
});

Template.Message.events({
  'click .delete': function() {
    const messageId = this._id;

    Messages.remove({
      '_id': messageId
    });

  },
});