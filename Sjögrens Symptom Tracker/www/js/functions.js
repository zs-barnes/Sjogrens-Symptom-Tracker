          window.onload = function()
            {
                document.addEventListener("deviceready", init, false);
            }
            function init()
            {
                document.getElementById("btnSave").addEventListener("click",saveData, false);
                document.getElementById("btnGet").addEventListener("click", getData, false);
            }
            function saveData()
            {
                var username = document.getElementById("username").value;
                var password = document.getElementById("pw").value;
                window.localStorage.setItem("uname", username);
                window.localStorage.setItem("pass", password);
                alert("Your data is stored successfuly");
            }
            function hideinfo()
            {
            	var input = document.getElementById("pw");
            	if (input.type === "password"){
            		input.type = "text";
            	}
            	else {
            	 input.type = "password";
            	 }
            }
            function getData()
            {
                var output = "Your user name is " +
                              window.localStorage.getItem("uname") +
                              " and your password is " +
                              window.localStorage.getItem("pass");
                document.getElementById("result").innerHTML = output;
            }
            function check(form)
            {
            	if (form.userid.value == "myuserid" && form.passwrd.value == "mypwid")
            	{
            		window.open('homepage.html')
            	}
            	else
            	{
            	  alert("Incorrect Password or Username. Please Try Again")
            	}
            }