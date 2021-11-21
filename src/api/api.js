import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.thecatapi.com/v1/images/search?format=json",
    headers: {
        'API-KEY': 'cb233e13-8557-4ad1-9015-1879acdd4ece'
    }
})

export const getPhoto = () => {
    return instance.get()
        .then(response => {
            return response.data;
        });
}

