const API_ADORGA = "/api/adOrga";

export async function adOrga() {
  const response = await fetch(`${API_ADORGA}/readAdOrga`, {
    credentials: "include",
  });
  return await response.json();
}
