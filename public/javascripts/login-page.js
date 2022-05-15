var attempt = 3;

function validate() {
    var uname = document.getElementById("username").value;
    var pswd = document.getElementById("password").value;

    let loginData={
        uname,
        pswd
    }
    if (loginData.uname &&loginData.pswd) {

        console.log(loginData)

        const loginUser = (loginData) => {
            axios.post('http://localhost:18/users/login', loginData, {
                    headers: {
                        'Content-Type': 'application/json'

                    }
                })
                .then(response => {
                    const userData = response.data;
                    localStorage.setItem("authUserData", JSON.stringify(userData))
                    console.log(`POST: user is LoggedIn`, userData);
                    window.location = "main.html";                    
                })
                .catch(error => console.error(error));
        };
        loginUser(loginData)
        // alert("Login successfully");
        // window.location = "main.html";
        // return false;
    } else {
        attempt--;
        alert("You have left " + attempt + " attempt, Invalid Username/password;");
        if (attempt == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";
            return false;
        }
    }
}