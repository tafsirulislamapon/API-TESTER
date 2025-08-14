const btnGetUser = document.getElementById('getUser')

const getUser = async () => {
   try {    
       const res = await fetch('https://randomuser.me/api/');
       const data = await res.json();
       if (!res.ok) {
         console.log("Problem!!")
       }
       console.log(data);
   } catch (error) {
    console.log(error);
   }

//    tradition fetch
    // fetch('https://randomuser.me/api/')
    //     .then( res => 
    //     {
    //         if(!res.ok){
    //             console.log('problem!')
    //             return;
    //         }
    //         return res.json();
    //     })
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err))
}

btnGetUser.addEventListener("click", getUser)