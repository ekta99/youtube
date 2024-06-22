export default function SearchBar(){
    return ( 
    <div className="flex  w-96 border border-gray-500 rounded-3xl ps-6 text-sm ">
        <input type="search" id="default-search" className=" w-full bg-slate-950 text-white border-none outline-none" placeholder="Search ..."  />
        <button type="submit" className=" hover:bg-gray-800 font-medium rounded-r-full text-sm px-7 py-3"> 
             <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg></button>
    </div>
    )   
}