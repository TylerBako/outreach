import { neonAuth } from "./neon"

const API_URL = import.meta.env.VITE_API_URL

export async function authenticatedFetch(
    path: string,
    options: RequestInit = {}
): Promise<Response> {
    const token = await neonAuth.getJWTToken?.()
        
        if (!token) {
            throw new Error("You must be signed in to perform this actions.")
        }

        const headers = new Headers(options.headers)

        headers.set("Authorization", `Bearer ${token}`)

        if(options.body && !headers.has("Content-Type")) {
            headers.set("Content-Type", "application/json")
        }

        return fetch(`${API_URL}${path}`, {
            ...options,
            headers,
        })
}