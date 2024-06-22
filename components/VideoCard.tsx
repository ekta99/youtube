export default function VideoCard(props:any){
    return <div className="p-2">
        <img  className="w-full rounded-xl" src={props.image}/>
        <div className="grid grid-cols-12 pt-2">
            <div className="col-span-1 align-">
            <img className="rounded-full w-12 h-12" src={props.image}/>
            </div>
            <div className="col-span-11 px-2">
                <div>{props.title}</div>
                <div className="col-span-11 text-gray-400 text-base">
                {props.author}
            </div>
            <div className="col-span-11 text-gray-400 text-base">
               {props.views} | {props.timestamp}
            </div>
            </div> 
           
        </div>
    </div>
}