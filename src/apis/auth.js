const API_USERS = "/api/auth";

export async function signin(credentials) {
  const response = await fetch(API_USERS, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (response.ok) {
    const responseFromBack = await response.json();
    console.log(responseFromBack);
    if (responseFromBack === "ban") {
      throw responseFromBack;
    } else if (responseFromBack === null) {
      console.log(responseFromBack);
      throw responseFromBack;
    } else {
      return responseFromBack
    }
  } else {
    throw new Error ("Oops error in signin")
  }
}

export async function getCurrentUser() {
  const response = await fetch(`${API_USERS}/current`, {
    credentials: "include",
  });
  return await response.json();
}

export async function signout() {
  await fetch(API_USERS, {
    method: "DELETE",
  });
}
