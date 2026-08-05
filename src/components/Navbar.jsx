import { Link } from "react-router-dom";
import { Brain, Circle } from "lucide-react";
import { useEffect, useState } from "react";
import { getHealth } from "../services/api";


export default function Navbar(){

const [online,setOnline] = useState(false);


useEffect(()=>{

async function checkHealth(){

try{

const data = await getHealth();

setOnline(data.healthy === true);


}catch(error){

setOnline(false);

}

}


checkHealth();


const interval = setInterval(
checkHealth,
30000
);


return ()=>clearInterval(interval);


},[]);



return (

<nav className="
w-full
border-b
border-white/10
bg-slate-950/80
backdrop-blur-xl
">


<div className="
max-w-7xl
mx-auto
px-6
py-5
flex
items-center
justify-between
">


<Link
to="/"
className="
flex
items-center
gap-3
"
>


<div className="
w-10
h-10
rounded-xl
bg-blue-600
flex
items-center
justify-center
"
>

<Brain/>

</div>


<div>

<span className="
text-xl
font-bold
block
">

NEURA-1

</span>


<div className="
flex
items-center
gap-2
text-xs
text-gray-400
">

<Circle
size={10}
fill={online ? "currentColor" : "none"}
className={
online
?
"text-green-400"
:
"text-red-400"
}
/>


{
online
?
"Online"
:
"Offline"
}


</div>


</div>


</Link>




<div className="
flex
gap-6
text-gray-300
">


<Link
to="/"
className="
hover:text-white
transition
"
>

الرئيسية

</Link>


<Link
to="/chat"
className="
hover:text-white
transition
"
>

المحادثة

</Link>


</div>


</div>


</nav>

)

}