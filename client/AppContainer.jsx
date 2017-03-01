import { createContainer } from 'meteor/react-meteor-data';
import { Messages } from '/lib/messages';
import { App } from './App';

export default createContainer(() => {
	const messages = Messages.find().fetch();
	return { messages }
}, App);