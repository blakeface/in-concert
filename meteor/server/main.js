import { Meteor } from 'meteor/meteor';
import FacebookOAuthInit from './imports/oauth-facebook';
import '/imports/api/items';

Meteor.startup(() => {
  FacebookOAuthInit();
});

import { Meteor } from 'meteor/meteor';
