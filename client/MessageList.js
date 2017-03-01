import { Template } from 'meteor/templating';
import { Messages } from '/lib/messages';

Template.MessageList.helpers({
  messages() {
    return Messages.find({}, { sort: {time: -1 }});
  },
});