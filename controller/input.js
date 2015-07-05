Router.route('/post/new', function() {
  this.render('post_new', {
    data: this.params.query
  });
});

if(Meteor.isClient){
  Template.input.events({
    'click button':function(){
      var text = $('textarea').val()
      $('textarea').val('')
      Posts.insert({world:this.world,body:text,content_url:this.url})
    }
  })
}
