const API_ADORGA = "/api/adOrga"

export async function adOrga() {
    try {
        const response = await fetch (`${API_ADORGA}/readAdOrga`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify()
        })
        const responseFromBackEnd = await response.json()
        return responseFromBackEnd
    } catch (error) {
        throw error
    }
}