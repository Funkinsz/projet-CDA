const API_USERS = "http://localhost:8000"

export async function verifyUser(newUser) {
    const response = await fetch(`${API_USERS}/verifyUser`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    })
    const responseFromBackEnd = await response.json()
    console.log(responseFromBackEnd);
    if (responseFromBackEnd === "User exist") {
        console.log("test u1")
        return responseFromBackEnd;
    } else if (responseFromBackEnd === "User is null") {
        console.log("test u2")
        throw error;
    }
}

export async function createUser(newUser) {
    const response = await fetch(`${API_USERS}/addUser`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    })
    const responseFromBackEnd = await response.json()
    if (response.ok) {
        console.log("test a1");
        return responseFromBackEnd;
    } else {
        console.log("test a2");
        if (responseFromBackEnd) {
            throw responseFromBackEnd;
        } else {
            throw new Error("Error Api CreateUser")
        }
    }
}