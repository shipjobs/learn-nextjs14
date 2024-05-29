"use client"

import { useEffect, useState } from "react";

// export const metadata = {
//   title: 'HOME',
// }


export default function Home() {

  const [isLoding, setIsLoding] = useState(true) //로딩 여부
  const [movies , setMovies] = useState([]);
  const getMovies = async() => {
    const response = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies")
    const json = await response.json()
    setMovies(json)

    setIsLoding(false);  //로딩 여부
  
  }

  useEffect(()=> {
    getMovies();

  },[])

  return (
    <div>
       {isLoding ? "Loding..." : JSON.stringify(movies)}
       
    </div>
  );
}
