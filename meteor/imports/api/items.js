import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

const Items = new Mongo.Collection('items');

Meteor.methods({
  'Items.addOne': ({ name }) => {
    return Items.insert({ name });
  },
});

export default Items;
