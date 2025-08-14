
// Get method
const getData = fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => {
        if(!res.ok)
        {
            console.log("End point error");
            return;
        }
        return res.json();
    }).then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err);
    })

//post method everythin is similar but just pass a new argument in the url ('url',  {here})

const newUser = {
    id: 24,
    name : "Tafsirul Islam",
    age : "22"
};

fetch('https://jsonplaceholder.typicode.com/users', {
    method : 'POST',
    headers : {
        'content-type' : 'application/json'
    },
    body : JSON.stringify(newUser)
})
    .then(res => res.json())
        .then(data => console.log(data))