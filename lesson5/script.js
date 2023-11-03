function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    console.log(name);
    console.log(email);
    if (name == "" || email == "") {
        if (name == "") {
            document.getElementById("error1").innerHTML = "Please Enter your name";
        } else {
            document.getElementById("error1").innerHTML = "";
        }
        if (email == "") {
            document.getElementById("error2").innerHTML = "Please Enter your Email";
        } else {
            document.getElementById("error2").innerHTML = "";
        }
    } else {
        document.getElementById("form-input").style.display = "none";
        document.getElementById("body").style.background = "red";
        document.getElementById("name1").innerHTML = "Welcome " + name;
        document.getElementById("email1").innerHTML = email;
    }

    event.preventDefault();

}