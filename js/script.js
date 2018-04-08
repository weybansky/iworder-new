// The next two functions works on the text field in the messaging page
function msg_box_focusin(){
	document.getElementById('msg-input').style.backgroundColor = "#fff";
}
function msg_box_focusout(){
 document.getElementById('msg-input').style.backgroundColor = "#ddd";
}


// This function brings up the edit profile section menu on the Main Profile Page
function edit_profile_btn () {
	// code to show/hide different sections
	document.getElementById('edit_profile_btn').style.display = 'none';
	document.getElementById('cancel_edit_profile').style.display = 'block';
	document.getElementById('no_edit').style.display = 'none';
	document.getElementById('edit_profile_view').style.display = 'block';

}

// This fuunction stop editing of the profile and returns the profile back to the Main Page
function cancel_edit_profile () {
	// code to show/hide different sections
	document.getElementById('edit_profile_view').style.display = 'none';
	document.getElementById('no_edit').style.display = 'block';
	document.getElementById('cancel_edit_profile').style.display = 'none';
	document.getElementById('edit_profile_btn').style.display = 'block';
}


// Signup page Password Match
function password_match () {
	var password = document.getElementById('password').value;
	var confirm_password = document.getElementById('confirm_password').value;

	var p_lenght = password.length;
	var cp_lenght = confirm_password.length;

	if (p_lenght < 2 && cp_lenght < 2) {
		// console.log('lessthan two');
		// when entered password is less that 2
		//  it should do nothing
		document.getElementById('confirm_password').style.borderColor = '#356B44';
		document.getElementById('confirm_password').style.boxShadow = '2px 0px 3px #356B44';
		document.getElementById('password_match').innerHTML = '';

	} else {
		if (password === confirm_password) {
			document.getElementById('confirm_password').style.borderColor = '#356B44';
			document.getElementById('confirm_password').style.boxShadow = '2px 0px 3px #356B44';

			document.getElementById('password_match').style.color = '#356B44';
			document.getElementById('password_match').innerHTML = 'Password matches';

		} else {
			document.getElementById('confirm_password').style.borderColor = '#843534';
			document.getElementById('confirm_password').style.boxShadow = '2px 0px 3px #843534';

			document.getElementById('password_match').style.color = '#843534';
			document.getElementById('password_match').innerHTML = 'Password does not match';
		}
	}
}






// =========Unused Functions========== //
// This function counts the number of characters in the recommendation text input box and helps display it in a progress bar
function recommendation_msg_progress () {
	var text = document.getElementById('recommendation_msg').value;

	var no_of_char = 0;
}
