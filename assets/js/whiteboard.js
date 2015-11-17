$(function() {
	$('#submit').click(function(e) {
		e.preventDefault();
		var question = $('#question').val();
		// var photo = $('#')
		console.log('here in jquery');
		$.ajax({
			url: 'question/create?text='+question,
			type: 'PUT',
			success: function(result) {
			
			}
		})
		return false;
	})
})