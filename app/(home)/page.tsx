import Link from "next/link";
import { relative, resolve } from "path";
import { useEffect, useState } from "react";

import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";

export const metadata = {
  title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 1000)); //5초간 잠시 멈춤
  //console.log("로딩 로그" + resolve); //서버사이드라.. 나타나지 않음

  const response = await fetch(API_URL); //케싱된 fetch 을 서버사이드에서 해결해줌
  const json = await response.json();
  return json;
  //return fetch(URL).then(response => response.json());  // 같은 뜻
}

export default async function Homepage() {
  const movies = await getMovies();

  //return <div>{JSON.stringify(movies)}</div>;
  //전체 목록 .. 리스트

  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
        // <div key={movie.id}>
        //   <img src={movie.poster_path} alt={movie.title}/>
        //   <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        // </div>
      ))}
    </div>
  );
}