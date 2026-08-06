import ChatBox from "../components/ChatBox";
import { 
  Brain, 
  Sparkles, 
  ShieldCheck,
  Cpu,
  Database
} from "lucide-react";


export default function Chat(){

return (

<div
className="
min-h-screen
bg-slate-950
text-white
px-4
sm:px-6
py-12
sm:py-16
relative
overflow-hidden
"
dir="rtl"
>


{/* Background Glow */}

<div
className="
absolute
top-10
right-0
w-48
h-48
sm:w-72
sm:h-72
bg-blue-600/20
rounded-full
blur-3xl
"
/>


<div
className="
absolute
bottom-10
left-0
w-48
h-48
sm:w-72
sm:h-72
bg-purple-600/20
rounded-full
blur-3xl
"/>



<div
className="
max-w-6xl
mx-auto
relative
z-10
"
>



{/* Header */}

<div
className="
text-center
mb-10
sm:mb-12
"
>


<div
className="
inline-flex
items-center
gap-3
bg-white/10
border
border-white/10
px-5
py-3
rounded-full
mb-6
"
>


<span
className="
w-3
h-3
bg-green-400
rounded-full
animate-pulse
"
/>


<Sparkles
size={18}
className="text-blue-400"
/>


<span
className="
text-sm
text-gray-300
"
>

NEURA-1 Connected

</span>


</div>




<h1
className="
text-4xl
sm:text-5xl
md:text-6xl
font-bold
leading-tight
"
>

تحدث مع


<span
className="
block
mt-2
text-blue-500
"
>

NEURA-1

</span>


</h1>



<p
className="
mt-5
text-gray-400
text-base
sm:text-lg
max-w-2xl
mx-auto
leading-relaxed
"
>

نظام ذكاء اصطناعي عربي متقدم
للمحادثة، التحليل، البرمجة،
والأتمتة الذكية.

</p>


</div>





{/* System Cards */}


<div
className="
grid
grid-cols-1
sm:grid-cols-2
md:grid-cols-3
gap-4
mb-10
"
>


<Card
icon={<Brain/>}
title="AI Engine"
text="محرك الذكاء الاصطناعي"
/>


<Card
icon={<ShieldCheck/>}
title="Secure API"
text="Cloud Architecture"
/>


<Card
icon={<Sparkles/>}
title="Version"
text="NEURA-1 v1.0.0"
/>



</div>





{/* System Status */}


<div
className="
bg-white/5
border
border-white/10
rounded-3xl
p-5
mb-10
grid
grid-cols-1
sm:grid-cols-3
gap-5
"
>


<Status
icon={<Cpu/>}
title="Engine"
value="Hybrid AI"
/>


<Status
icon={<Database/>}
title="Memory"
value="Context Ready"
/>


<Status
icon={<Sparkles/>}
title="Language"
value="Arabic First"
/>



</div>






{/* Chat Box */}

<div
className="
bg-white/5
border
border-white/10
rounded-3xl
p-3
sm:p-5
"
>

<ChatBox />

</div>



</div>


</div>

)

}





function Card({icon,title,text}){

return (

<div
className="
bg-white/5
border
border-white/10
rounded-2xl
p-5
flex
items-center
gap-4
hover:bg-white/10
transition
"
>

<div className="text-blue-400">
{icon}
</div>


<div>

<h3 className="font-bold">
{title}
</h3>


<p className="text-sm text-gray-400">
{text}
</p>


</div>


</div>

)

}





function Status({icon,title,value}){

return (

<div
className="
flex
items-center
gap-3
"
>

<div
className="
text-blue-400
"
>
{icon}
</div>


<div>

<p className="
text-xs
text-gray-400
">

{title}

</p>


<p className="
font-semibold
">

{value}

</p>


</div>


</div>

)

}