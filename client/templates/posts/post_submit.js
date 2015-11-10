Template.postSubmit.events({
	'submit form': function(e) {
		e.preventDefault();
		var post = {
			url: $(e.target).find('[name=url]').val(),
			title: $(e.target).find('[name=title]').val()
		};

		Meteor.call('postInsert' , post , function(error , results){
			if (error)
				return alert(this.error);
			if(results.postExits)
				return alert('This post already exits.');
			Router.go('postPage' , {_id: results._id});
		});
	}
});