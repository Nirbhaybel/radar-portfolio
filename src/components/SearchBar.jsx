export default function SearchBar({search,setSearch}){

return(

<input

type="text"

placeholder="Search publications..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

className="w-full border rounded-lg p-4 text-lg shadow"

 />

)

}