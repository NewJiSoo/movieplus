"use client";

import { useEffect, useState } from "react";
import styles from "../styles/movie-video.module.css"


export default function MovieVideosSlide({ videos }) {
    const [startIndex, setStartIndex] = useState(0);
    const [nextBtn, setNextBtn] = useState(false)
    const [preBtn, setPreBtn] = useState(false)
    const videoCount = videos.length
    const videosToShow = videos.slice(startIndex, startIndex + 3);

    useEffect(() => {
        if (videoCount > 3) {
            setNextBtn(true);
        } else {
            setNextBtn(false);
        }
    }, []);

    const handleNextClick = () => {
        const nextIdx = startIndex + 3;
        if (nextIdx < videoCount) {
            setStartIndex(nextIdx);
            setPreBtn(true);
            if (nextIdx + 3 >= videoCount) {
                setNextBtn(false)
            }
        }
    };

    const handlePrevClick = () => {
        const prevIdx = startIndex - 3;
        if (prevIdx >= 0) {
            setStartIndex(prevIdx);
            setNextBtn(true)
            if (prevIdx === 0) {
                setPreBtn(false)
            }
        }
    }

    return <div className={styles.main}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        {preBtn &&
            <div className={styles.arrow}>
                <span className="material-symbols-outlined" onClick={handlePrevClick}>
                    chevron_left
                </span>
            </div>
        }

        <div className={styles.container}>
            {videosToShow.map(video =>
                <iframe
                    key={video.id}
                    src={`https://youtube.com/embed/${video.key}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={video.name}
                />)}

        </div>
        {nextBtn &&
            <div className={styles.arrow}>
                <span className="material-symbols-outlined" onClick={handleNextClick}>
                    chevron_right
                </span>
            </div>
        }
    </div>

}