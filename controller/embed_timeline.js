Router.route('/embed/timeline', function() {
  this.layout('embed')
  this.render('posts', {
    data: {
      posts: Posts.find().fetch().reverse()
    }
  });
});
