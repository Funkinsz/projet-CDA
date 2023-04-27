const API_USERS = "/api/users"

export async function verifyUser(newUser) {
    const response = await fetch(`${API_USERS}/verifyUser`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    })
    const responseFromBackEnd = await response.json()
    if (responseFromBackEnd === "User exist") {
        return responseFromBackEnd;
    } else if (responseFromBackEnd === "User is null") {
        throw error;
    }
}

export async function createUserPro(newUser) {
    const response = await fetch(`${API_USERS}/addUserPro`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    })
    const responseFromBackEnd = await response.json()
    if (response.ok) {
        return responseFromBackEnd;
    } else {
        if (responseFromBackEnd) {
            throw responseFromBackEnd;
        } else {
            throw new Error("Error Api CreateUser")
        }
    }
}

export async function createUserPerso(newUser) {
    const response = await fetch(`${API_USERS}/addUserPerso`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    })
    const responseFromBackEnd = await response.json()
    if (response.ok) {
        return responseFromBackEnd;
    } else {
        if (responseFromBackEnd) {
            throw responseFromBackEnd;
        } else {
            throw new Error("Error Api CreateUser")
        }
    }
}