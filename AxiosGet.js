const btn = document.getElementById('axiosGet');

const axiosGet = async () => {
    const res = await axios.get('https://randomuser.me/api/')
    console.log(res.data)
}

btn.addEventListener('click', axiosGet)