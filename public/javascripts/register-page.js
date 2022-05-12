function registration()
    {

        var fname= document.getElementById("f_name").value;
        var lname= document.getElementById("l_name").value;
        var email= document.getElementById("email").value;
        var uname= document.getElementById("u_name").value;
        var pswd= document.getElementById("pswd").value;           
        
        var pswd_expression = /^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-])/;
        var letters = /^[A-Za-z]+$/;
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if(fname=='')
        {
            alert('Please enter your first name');
        }
        else if(!letters.test(fname))
        {
            alert('Name field required only alphabet characters');
        }
        else if(lname=='')
        {
            alert('Please enter your last name');
        }
        else if(!letters.test(lname))
        {
            alert('Name field required only alphabet characters');
        }
        else if(email=='')
        {
            alert('Please enter your user email id');
        }
        else if (!filter.test(email))
        {
            alert('Invalid email');
        }
        else if(uname=='')
        {
            alert('Please enter the user name.');
        }
        else if(!letters.test(uname))
        {
            alert('User name field required only alphabet characters');
        }
        else if(pswd=='')
        {
            alert('Please enter Password');
        }
        else
        {                                           
               alert('Thank You for Registration,Please go back to login page');
               window.location.href = "login.html"; 
        }
    }