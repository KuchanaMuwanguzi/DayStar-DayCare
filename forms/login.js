const form = document.getElementById("login-form");

function login(){
    console.log(form.username.value)
}

form.addEventListener ("submit", (event) => {
    event.preventDefault();
    const logInData ={
        username: form.username.value,
        password: form.password.value
    }
    console.log(JSON.stringify (logInData));
    console.log(form.password.value);
    
    console.log (logInData)
    localStorage.setItem("data", JSON.stringify (logInData))
    console.log ("data successfuly written")
}
)

const display = document.getElementById("readData");

display.addEventListener ("click", (event) => {
    const readData = JSON.parse(localStorage.getItem ("data"));
    console.log ("data has been read")
    document.getElementById("display").innerHTML = `username: ${readData.username}<br>
    password: ${readData.password}`;
}
)


form.addEventListener ("submit", (event) => {
    event.preventDefault ();
    fetch ("./data.json")
    .then ((Response) => Response.json ())
    .then ((json => {
        console.log (json)
        if(form.username.value === json.username && form.password.value === json.password)
        {
            console.log ("authentication successful")
        } else 
        {
            console.log ("username or password incorrect")
        }

    }))
}
)