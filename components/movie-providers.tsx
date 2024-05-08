import { API_URL } from "../app/(home)/page"
import styles from "../styles/movie-provider.module.css"

export async function getMovieProvider(id: string) {
  const response = await fetch(`${API_URL}/${id}/providers`)
  return response.json();
}


export default async function MovieProvider({ id }) {
  const movies = await getMovieProvider(id);
  //movies 객체 속성 키를 배열로 반환해서 비교하는 방법
  if (Object.keys(movies).length === 0) {
    return <div className={styles.container}></div>;
  }

  let provider = null
  if (movies.KR) {
    provider = movies.KR
  } else {
    provider = movies.US
  }

  let rentOrBuy = null
  if (provider.rent) {
    rentOrBuy = provider.rent
  } else if (provider.buy) {
    rentOrBuy = provider.buy
  }
  else if (provider.flatrate) {
    rentOrBuy = provider.flatrate
  }

  return (
    <div className={styles.container}>
      {provider &&
        <>
          {rentOrBuy &&
            rentOrBuy.map(provider =>
              <div key={provider.provider_id}>
                <img
                  src={provider.logo_path}
                  alt={provider.provider_name}
                  className={styles.logo} />
              </div>
            )}
        </>
      }
    </div>
  )
} 