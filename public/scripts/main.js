console.log("Sanity Check: JS is working!");
working = "linked"


$(document).ready(function(){

	species = $('#fish').val()

	$('#spotlist').on('click', '.delete', function(){
		console.log($(this).attr('data-id'));
		$.ajax({
			method: 'DELETE',
			url: '/spots/'+$(this).attr('data-id'),
			success: deleteSuccess,
			error: deleteError

		})
	})

	$('#spotlist').on('click', '.update', function(){
		console.log($(this).attr('data-id'));
		$.ajax({
			method: 'PUT',
			url: '/spots/'+$(this).attr('data-id'),
			data: {species: $('#fish').val()},
			success: updateSuccess,
			error: updateError

		})
	})
})

function deleteSuccess(json) {
	console.log(species)
	location.reload();

}

function deleteError() {
	console.log('something wrong with ajax')
}

function updateSuccess(json) {
	console.log(species)
	location.reload();
}

function updateError () {
	console.log('better start googling')
}



