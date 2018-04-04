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



// =========Unused Functions========== //
// This function counts the number of characters in the recommendation text input box and helps display it in a progress bar
function recommendation_msg_progress () {
	var text = document.getElementById('recommendation_msg').value;

	var no_of_char = 0;
}
