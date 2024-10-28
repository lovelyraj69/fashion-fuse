import axios from "axios"

export const fetchDataFromApi = async (url) => {
    try {
        const {data} = await axios.get('http://localhost:8080' + url);
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const postData = async (url, formData) => {
    try {
        const response = await fetch('http://localhost:8080' + url,{
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            const data = await response.json();
        }
    } catch (error) {
        console.log(error);
    }
}