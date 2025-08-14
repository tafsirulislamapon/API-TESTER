const btnPostUser = document.getElementById('postUser')
const newUser = {
    id : '23',
    name : 'Tafsirul Islam',
    age: '22',

}
const PostUser = async () => {
   try {    
       const res = await fetch('https://jsonplaceholder.typicode.com/users', {
        method : 'POST',
        headers : {
            'content-type' : 'application/json',
        },
        body : JSON.stringify(newUser)
       });
       const data = await res.json();
       if (!res.ok) {
         console.log("Problem!!")
       }
       console.log(data);
   } catch (error) {
    console.log(error);
   }
}

btnPostUser.addEventListener("click", PostUser)