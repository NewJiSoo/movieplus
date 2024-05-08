import { Suspense } from "react";
import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-info.module.css"
import MovieProvider from "./movie-providers";

export async function getMovie(id: string) {
    // await new Promise((re) => setTimeout(re, 1000))
    // throw new Error('broke')
    const response = await fetch(`${API_URL}/${id}`)
    return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
    const movie = await getMovie(id);
    return (
        <div className={styles.container}>
            <img src={movie.poster_path} className={styles.poster} alt={movie.title} />
            <div className={styles.info} >
                <h1 className={styles.title} >{movie.title}</h1>
                <h3>⭐{movie.vote_average.toFixed(1)}</h3>
                <p>{movie.overview}</p>
                <a href={movie.homepage} target={'_blank'}>Homepage &rarr;</a>
                <Suspense>
                    <MovieProvider id={id} />
                </Suspense>
            </div>
        </div>
    )
}