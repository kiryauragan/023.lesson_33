document.querySelector("button").addEventListener("click", (event) => {
	event.preventDefault();
	let regData = {
		name: document.getElementById("username").value,
		surname: document.getElementById("surname").value,
		birthday: document.getElementById("birthday").value,
		sex: document.querySelector('input[name="sex"]:checked').id,
		city: document.getElementById("city").value,
		address: document.getElementById("address").value,
		language: {
			english: document.getElementById("english").checked,
			ukrainian: document.getElementById("ukrainian").checked,
			polish: document.getElementById("polish").checked,
		},
	};
	console.log(regData);
	addDataToTable();
});

function addDataToTable() {
	let name = document.getElementById("username").value;
	let surname = document.getElementById("surname").value;
	let birthday = document.getElementById("birthday").value;
	let sex = document.querySelector('input[name="sex"]:checked').id;
	let city = document.getElementById("city").value;
	let address = document.getElementById("address").value;
	let english = document.getElementById("english").checked;
	let ukrainian = document.getElementById("ukrainian").checked;
	let polish = document.getElementById("polish").checked;

	let table = document.getElementById("dataTable");
	let row = table.insertRow();
	let nameCell = row.insertCell();
	let surnameCell = row.insertCell();
	let birthdayCell = row.insertCell();
	let sexCell = row.insertCell();
	let cityCell = row.insertCell();
	let addressCell = row.insertCell();
	let languageCell = row.insertCell();

	nameCell.textContent = name;
	surnameCell.textContent = surname;
	birthdayCell.textContent = birthday;
	sexCell.textContent = sex;
	cityCell.textContent = city;
	addressCell.textContent = address;

	let selectedLanguages = [];
	if (english) {
		selectedLanguages.push("English");
	}
	if (ukrainian) {
		selectedLanguages.push("Ukrainian");
	}
	if (polish) {
		selectedLanguages.push("Polish");
	}
	languageCell.textContent = selectedLanguages.join(", ");

	// Очистка данных после ввода
	document.getElementById("username").value = "";
	document.getElementById("surname").value = "";
	document.getElementById("birthday").value = "";
	document.getElementById("city").value = "";
	document.getElementById("address").value = "";
	document.getElementById("english").checked = false;
	document.getElementById("ukrainian").checked = false;
	document.getElementById("polish").checked = false;
}
