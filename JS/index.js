function validate() {
	let firstNameInput = document.getElementById('first-name').value
	let lastNameInput = document.getElementById('last-name').value
	let emailInput = document.getElementById('email').value
	let phoneNumber = document.getElementById('phoneNo').value
	let batchNumber = document.getElementById('batchNo').value
	let moduleNumber = document.getElementById('moduleNo').value
	let tnCInput = document.getElementById('tnC').checked

	let error = false

    let onlyAlphabet = /^[A-Za-z]+$/;
    let onlyNumber =  /^[0-9]+$/;
    let emailFormat = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;


	if(firstNameInput.match(onlyAlphabet) && firstNameInput.length>2){
		document.getElementById('first-name-valid').style.display = 'block'
		document.getElementById('first-name-invalid').style.display = 'none'
	} else {
		document.getElementById('first-name-invalid').style.display = 'block'
		document.getElementById('first-name-valid').style.display = 'none'
		error = true
	}

	if(lastNameInput.match(onlyAlphabet) && lastNameInput.length>2){
		document.getElementById('last-name-valid').style.display = 'block'
		document.getElementById('last-name-invalid').style.display = 'none'
	} else {
		document.getElementById('last-name-invalid').style.display = 'block'
		document.getElementById('last-name-valid').style.display = 'none'
		error = true
	}

	if (emailInput.match(emailFormat)){
        document.getElementById("email-valid").style.display = "block";
        document.getElementById("email-invalid").style.display = "none";
    } else {
        document.getElementById("email-invalid").style.display = "block";
        document.getElementById("email-valid").style.display = "none";
            error = true
    }

    if(phoneNumber.match(onlyNumber) && phoneNumber.length == 10) {
        document.getElementById("phoneNo-valid").style.display = "block";
        document.getElementById("phoneNo-invalid").style.display = "none";
    } else{
        document.getElementById("phoneNo-invalid").style.display = "block";
        document.getElementById("phoneNo-valid").style.display = "none";
        error = true;
    }

	if(batchNumber !== 'None'){
		document.getElementById('batchNo-valid').style.display = "block";
		document.getElementById('batchNo-invalid').style.display = "none";
	} else {
		document.getElementById('batchNo-invalid').style.display = "block";
		document.getElementById('batchNo-valid').style.display = "none";
		error = true
	}

	if(moduleNumber !== 'None'){
		document.getElementById('moduleNo-valid').style.display = "block";
		document.getElementById('moduleNo-invalid').style.display = "none";
	} else {
		document.getElementById('moduleNo-invalid').style.display = "block";
		document.getElementById('moduleNo-valid').style.display = "none";
		error = true
	}

	if(tnCInput) {
		document.getElementById("tnC-invalid").style.display = "none";
	} else {
		document.getElementById("tnC-invalid").style.display = "block";
		error = true
	}

	if(!error) {
		alert('Your details have been saved successfully!')
		document.getElementById('first-name').value = ''
		document.getElementById('last-name').value = ''
		document.getElementById('email').value = ''
		document.getElementById('phoneNo').value = ''
		document.getElementById('batchNo').value = 'None'
		document.getElementById('moduleNo').value = ''
		document.getElementById('tnC').checked = false

		document.getElementById('first-name-valid').style.display = 'none'
		document.getElementById('last-name-valid').style.display = 'none'
		document.getElementById("email-valid").style.display = "none"
		document.getElementById("phoneNo-valid").style.display = "none"
		document.getElementById("batchNo-valid").style.display = "none"
		document.getElementById('moduleNo-valid').style.display = "none"
	}
}