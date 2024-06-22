import VideoCard from "./VideoCard"

const VIDEOS =[
    {  
    title:"How to learn coding in 30 days | 30 day plan | code with me",
    image:"card.png",
    author:"Ekta Vyas",
    timestamp:"10 days ago",
    views:"200k"},
    {  
    title:"How to learn playing in 30 days | 30 day plan | code with me",
    image:"card.png",
    author:"Ekta Vyas",
    timestamp:"10 days ago",
    views:"200k"},
    {  
    title:"How to learn dancing in 30 days | 30 day plan | code with me",
    image:"card.png",
    author:"Ekta Vyas",
    timestamp:"10 days ago",
    views:"200k"},
    {  
    title:"How to learn dancing in 30 days | 30 day plan | code with me",
    image:"card.png",
    author:"Ekta Vyas",
    timestamp:"10 days ago",
    views:"200k"},
    {  
    title:"How to learn dancing in 30 days | 30 day plan | code with me",
    image:"card.png",
    author:"Ekta Vyas",
    timestamp:"10 days ago",
    views:"200k"},
    {  
    title:"How to learn dancing in 30 days | 30 day plan | code with me",
    image:"card.png",
    author:"Ekta Vyas",
    timestamp:"10 days ago",
    views:"200k"},
    {  
    title:"How to learn dancing in 30 days | 30 day plan | code with me",
    image:"card.png",
    author:"Ekta Vyas",
    timestamp:"10 days ago",
    views:"200k"},
]

export default function VideoGrid(){
    return <div className="grid grid-cols-1md:grid-cols-2 lg:grid-cols-4 ">
        {VIDEOS.map((video,i)=><div key={i}>
        <VideoCard
      title={video.title}
      image={video.image}
      author={video.author}
      timestamp={video.timestamp}
      views={video.views}
      />
        </div>)}
    </div>
}