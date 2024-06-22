import AppBar from "@/components/AppBar";
import VideoCard from "@/components/VideoCard";
import VideoGrid from "@/components/VideoGrid";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <AppBar/>
      {/* <VideoCard
      title={"How to learn coding in 30 days | 30 day plan | code with me"}
      image={"card.jpg"}
      author={"Ekta Vyas"}
      timestamp={"10 days ago"}
      views={"200k"}
      /> */}
      <VideoGrid/>
    </div>
  );
}
