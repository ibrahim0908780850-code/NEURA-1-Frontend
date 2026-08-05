import { Link } from "react-router-dom";
import { Brain } from "lucide-react";


export default function Navbar(){

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
">

<Brain/>

</div>


<span className="
text-xl
font-bold
">

NEURA-1

</span>


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
"
>
الرئيسية
</Link>


<Link
to="/chat"
className="
hover:text-white
"
>
المحادثة
</Link>


</div>


</div>

</nav>

)

}