import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-info.module.css";

//Suspense 를 적용하기위해 async 으로 정의
export async function getMovie(id: string) {
  //
  console.log(`Fetching movies:${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 1000)); //5초간 잠시 멈춤
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

//Suspense 를 적용하기위해 async 으로 정의
export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  //  return <h6>{JSON.stringify(movie)} </h6>;

  return (
    <div className={styles.container}>
      <img
        src={movie.poster_path}
        className={styles.poster}
        alt={movie.title}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐️ {movie.vote_average}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>
          {" "}
          Homepage &rarr;
        </a>{" "}
      </div>
    </div>
  );
}
