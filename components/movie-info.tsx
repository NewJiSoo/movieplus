import { API_URL } from "../app/(home)/page";

async function getMovie(id: string) {
    await new Promise((re) => setTimeout(re, 1000))
    throw new Error('broke')
    const response = await fetch(`${API_URL}/${id}`)
    return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
    const movies = await getMovie(id);
    return <h1>{JSON.stringify(movies)}</h1>
}