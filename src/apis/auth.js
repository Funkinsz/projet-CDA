const API_USERS = "/api/auth"

export async function signin(credentials) {
    const response = await fetch(API_USERS, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials)
    })

    const responseFromBack = await response.json()
    if (response.ok) {
        return responseFromBack
    } else {
        if (responseFromBack) {
            throw responseFromBack
        } else {
            throw new Error("Oops error")
        }
    }
}

export async function getCurrentUser() {
    const response = await fetch(`${API_USERS}/current`, {
        credentials: "include"
    })
    console.log('test');
    const responesFromBackEnd = await response.json()
    console.log({responesFromBackEnd});
    return responesFromBackEnd
}

export async function signout() {
    await fetch(API_USERS, {
        method: "DELETE",
    })
}