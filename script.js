//your JS code here. If required.
const submitBtn = document.querySelector("#submit");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const rememberMe = document.querySelector("#checkbox");
const existingBtn = document.querySelector("#existing");


let credentails = JSON.parse(localStorage.getItem("data")) || {};

if (credentails.username && credentails.password) {
	existingBtn.style.display = "block";
}

submitBtn.addEventListener("click",(e) => {
	e.preventDefault();
	
	let usernameValue = username.value ;
	let passwordValue = password.value ;
	if(usernameValue === "" || passwordValue === "" ) {
		alert("Enter all the details properly")
		return ;
	}
	alert(`Logged in as ${usernameValue}`); 
	let remember = rememberMe.checked ;
	credentails.username = usernameValue ;
	credentails.password = passwordValue ;
	if(remember){
		const data = {
			username: usernameValue,
			password: passwordValue
		};
		localStorage.setItem("data", JSON.stringify(data));
	}
	else {
        localStorage.removeItem("data");
	}
	
})

existingBtn.addEventListener("click", () => {
	const saved = JSON.parse(localStorage.getItem("data"));
	if (saved) {
		alert(`Logged in as ${saved.username}`);
	}
});




