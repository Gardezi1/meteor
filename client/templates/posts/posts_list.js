
// ]

Template.postsList.helpers({
	// console.log('Ali');
	posts:	function(){
		return Posts.find({} , {sort: {submitted: -1}});
	}

});