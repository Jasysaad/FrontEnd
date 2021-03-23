document.querySelector("#password").oninput = (e) => {  //  function(e) {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    const password = document.getElementById("password").value;
    if (regex.test(password)===false) {
        document.querySelector("#passwordError").innerHTML = `"${password} "Give it numbers, capitals and at least 8 characters`;
    }
    else {
        document.querySelector("#passwordError").innerHTML = "";
    }
}

document.getElementById("checkbox").onclick = function() {Age16()}

function Age16() {
    const check = document.getElementById("checkbox").checked;
    if(!check)
    {
        document.querySelector("#error").innerHTML = "Must be 18+";
        return false;
    }
    else
    {
        document.querySelector("#error").innerHTML = "";
        return true;
    }
}