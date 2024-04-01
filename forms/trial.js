let form = document.getElementById('login');

form.addEventListener('submit', (e) => {
        e.preventDefault();
        fetch('../dummyData.json')
            .then(response => response.json())
            .then(json => {
                console.log(json);
                if(json[0].admin[0].email === login.email.value 
                    && json[0].admin[0].password === login.password.value){
                        window.location.replace('./admin.html')
                }else{
                  