// Using axios
const axios = require('axios');

async function fetchDataWithAxios() {
    try {
        const response = await axios.get('https://hungnttg.github.io/test1.json');
        const jsonData = response.data;
        console.log(jsonData); // This will output the JSON data
        // You can then use jsonData as per your requirement
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchDataWithAxios();

// Using node-fetch
const fetch = require('node-fetch');

async function fetchDataWithNodeFetch() {
    try {
        const response = await fetch('https://hungnttg.github.io/test1.json');
        const jsonData = await response.json();
        console.log(jsonData); // This will output the JSON data
        // You can then use jsonData as per your requirement
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchDataWithNodeFetch();