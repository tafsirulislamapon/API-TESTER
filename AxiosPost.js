const btnaxios = document.getElementById('axiosPost');

const newUser12 = {
    id: '12',
    name : 'Tafsir',
    age : '22'
}

const axiosPost = async () => {
    const res = await axios.post('https://jsonplaceholder.typicode.com/users', newUser12)
    console.log(res.data)
}

btnaxios.addEventListener('click', axiosPost)