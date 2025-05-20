import {Puppy} from "../types";

export async function getPuppies() {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/puppies');
        if(!response.ok) {
            throw await response.json();
        }
        const {data} = await response.json();

        data.forEach((item) => {
            item.imageUrl = item.imageUrl.replace('http://localhost', 'http://localhost:5173');
        })

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}


export async function toggleLikedStatus(id: Puppy["id"]) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/puppies/${id}/like`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
            }
        });

        if (!response.ok) {
            throw await response.json();
        }

        const {data} = await response.json();


        data.imageUrl = data.imageUrl.replace('http://localhost', 'http://localhost:5173');

        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function createPuppy(formData: FormData) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/puppies`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
            },
            body: formData,
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw errorData;
        }

        const data = await response.json();


        // data.imageUrl = data.imageUrl.replace('http://localhost', 'http://localhost:5173');

        return data;
    } catch (error) {
        return error;
    }
}
