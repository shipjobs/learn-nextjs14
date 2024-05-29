import { API_URL } from "../app/(home)/page";
import style from "../styles/movie-videos.module.css";

//Suspense 를 적용하기위해 async 으로 정의
async function getVideos(id: string) {
  //
  console.log(`Fetching Videos:${Date.now()}`);

  await new Promise((resolve) => setTimeout(resolve, 2000)); //5초간 잠시 멈춤
  //
  //throw new Error("something broke...");  //에러  핸들링 목적(임시)

  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

//Suspense 를 적용하기위해 async 으로 정의
export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);

  // return <h6> {JSON.stringify(videos)}</h6>;
  return (
    <div className={style.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          title={video.name}
        />
      ))}
    </div>
  );
}
