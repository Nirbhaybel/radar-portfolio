import {motion} from "framer-motion";
import {FaFilePdf,FaBookOpen,FaMapMarkerAlt} from "react-icons/fa";

export default function PublicationCard({paper}){

return(

<motion.div

whileHover={{y:-8}}

className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:border-blue-500 transition-all duration-300"

>

<h3 className="text-xl font-bold text-gray-800">

{paper.title}

</h3>

<p className="text-blue-700 mt-2 font-semibold">

{paper.conference}

</p>

<p className="flex items-center text-gray-500 mt-1">

<FaMapMarkerAlt className="mr-2"/>

{paper.location}

</p>

<div className="mt-4">

{

paper.keywords.map((tag,index)=>

<span

key={index}

className="inline-block bg-blue-100 text-blue-800 text-sm rounded-full px-3 py-1 mr-2 mb-2"

>

{tag}

</span>

)

}

</div>

<p className="text-gray-600 mt-4">

{paper.abstract}

</p>

<div className="flex mt-6 gap-4">

<a

href={paper.pdf}

target="_blank"

className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center"

>

<FaFilePdf className="mr-2"/>

Paper

</a>

<button

className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center"

>

<FaBookOpen className="mr-2"/>

Abstract

</button>

</div>

</motion.div>

)

}