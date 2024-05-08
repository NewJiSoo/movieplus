import { API_URL } from "../app/(home)/page";
import MovieVideosSlide from "./movie-videosSlide";

async function getVideos(id: string) {
    // await new Promise((re) => setTimeout(re, 3000));
    const response = await fetch(`${API_URL}/${id}/videos`)
    return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
    const videos = await getVideos(id);

    return <div>
        <MovieVideosSlide videos={videos} />
    </div>
}