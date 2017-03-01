import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import AppContainer from './AppContainer';
import './main.html';

Meteor.startup(() => {
  render(<AppContainer />, document.getElementById('app'));
});