Channels = new Meteor.Collection('channels')
Posts = new Meteor.Collection('posts')

Channels._transform = function(doc) {
  doc.posts = Posts.find({
    channel: doc._id
  })
  return doc
}

if (Meteor.isClient) {
  Template.body.helpers({
    channels: function() {
      return Channels.find()
    }
  })

  Router.configure({
    layoutTemplate: 'body'
  });

}
