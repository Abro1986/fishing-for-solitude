console.log("Sanity Check: JS is working!");
working = "linked"


$(document).ready(function(){

	$('#spotlist').on('click', '.delete', function(){
		console.log($(this).attr('data-id'));
		$.ajax({
			method: 'DELETE',
			url: 'spots/'+$(this).attr('data-id'),
			success: deleteSuccess,
			error: deleteError

		})
	})
})

function deleteSuccess(json) {
	let spotId = json;
	console.log('delete spot' + spotId);
//	break;

}

function deleteError() {
	console.log('something wrong with ajax')
}