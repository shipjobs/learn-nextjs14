import { Suspense } from "react";
//import { API_URL } from "../../../(home)/page";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

//
// async function getMovie(id: string) {
//   //
//   console.log(`Fetching movies:${Date.now()}`);
//   await new Promise((resolve) => setTimeout(resolve, 5000)); //5초간 잠시 멈춤
//   const response = await fetch(`${API_URL}/${id}`);
//   return response.json();
// }

// async function getVideos(id: string) {
//   //
//   console.log(`Fetching Videos:${Date.now()}`);
//   await new Promise((resolve) => setTimeout(resolve, 5000)); //5초간 잠시 멈춤
//   const response = await fetch(`${API_URL}/${id}/videos`);
//   return response.json();
// }

//id 값에 따라 페이지 타이틀이 변경되어야 하기에 ..
//Next에서 정의된 함수는 Next.js 13 이상에서 페이지 또는 레이아웃에 메타데이터를 동적으로 생성하기 위해 사용 
//export 를 만드시 사용 해야 함
export async function generateMetadata({ params: { id } }: IParams) {

  const movie = await getMovie(id);
  return {
    title: movie.title  
  };
};

interface IParams {
  params: { id: string };
}

//id 기준 얻어온 json 에서 정보 가져와 보여 주기
export default async function MovieDetail({ params: { id } }: IParams) {
  // console.log("--------------------");
  // // const movie = await getMovie(id);
  // // const videos = await getVideos(id);
  // // console.log("end fetcting");
  // return <h1>{movie.title}</h1>;
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id}></MovieInfo>
      </Suspense>
      <Suspense fallback={<h1>Loading mocie videos</h1>}>
        <MovieVideos id={id}></MovieVideos>
      </Suspense>
    </div>
  );
}
