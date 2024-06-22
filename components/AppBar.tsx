import SearchBar from "./SearchBar";

export default function AppBar(){
    return<div className="flex justify-between p-2">
    <div className="text-lg inline-flex items-center">Youtube</div>
    <div><SearchBar/> </div>
    <div className="text-lg inline-flex items-center">signin</div>
    </div>
}