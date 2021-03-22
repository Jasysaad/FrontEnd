document.querySelector("#password").oninput = (e) => {  //  function(e) {
    const regex = new RegExp('.*password.*');
    const password = document.getElementById("password").value;
    if (regex.test(password)) {
        document.querySelector("#passwordError").innerHTML = `"${password}" is not a very strong password!`;
    }
    else {
        document.querySelector("#passwordError").innerHTML = "";
    }
}