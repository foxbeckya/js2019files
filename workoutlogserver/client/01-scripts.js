function fetchHelloDataFromAPI() {
    fetch('http://localhost:3000/test/helloclient', {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
    .then(function(response) {
        console.log("Fetch response:", response)
        return response.text();
    })
    .then(function(text) {
        console.log(text);
    });
}

function postToOneArrow(){
    var url= 'http://localhost:3000/test/one';

    fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(res=> res.text())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
}

function postData() {
    let content = {username: {item: 'This was saved'}};

    let userNameAfterFetch = document.getElementById('username');
    let createdAtAfterFetch= document.getElementById('created-at');
    
    fetch ('http://localhost:30000/test/seven', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(content)
    })
    .then(response=>response.json())
    .then(function(text) {
        console.log(text);

        userNameAfterFetch.innerHTML= text.username.username;
        createdAtAfterFetch.innerHTML = text.username.createdAt;
    });
}

function fetchFromOneDisplayData(){
    //1
    let url = 'http://localhost:3000/test/one';
    let dataView = document.getElementById('display-one');   

    //2
    fetch(url, {
      method: 'GET', 
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(
        function(response){
            return response.json()
        })
    .catch(
        function(error){
            console.error('Error:', error)
        })
    .then(
        function(results){
            let myList = document.querySelector('#getjson'); //3

            for (r of results){  //4
                console.log('Response:', r.testdata); //5
                var listItem = document.createElement('li');  //6 
                listItem.innerHTML = r.testdata; //7
                myList.appendChild(listItem); //8
            }
        })
}