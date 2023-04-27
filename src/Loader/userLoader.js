import { getCurrentUser } from "../apis/auth"

export async function userLoader() {
    return getCurrentUser();
}