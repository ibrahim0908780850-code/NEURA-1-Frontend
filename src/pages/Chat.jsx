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
dir="rtl"
className="
min-h-screen
bg-slate-950
text-white

px-4
sm:px-6

py-8
sm:py-12

relative
overflow-hidden
"
>


{/* Glow */}

<div
className="
absolute
top-0
right-0

w-56
h-56

sm:w-80
sm:h-80

bg-blue-600/20
rounded-full
blur-3xl
"
/>


<div
className="
absolute
bottom-0
left-0

w-56
h-56

sm:w-80
sm:h-80

bg-purple-600/20
rounded-full
blur-3xl
"
/>





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

mb-8
sm:mb-10
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
py-2.5

rounded-full

mb-5
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

NEURA-1 Online

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
mt-4

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








{/* Cards */}



<div

className="
grid

grid-cols-1
sm:grid-cols-3

gap-4

mb-8
"

>


<Card
icon={<Brain/>}
title="AI Engine"
text="Hybrid Intelligence"
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








{/* Status */}



<div

className="
bg-slate-900/70

border
border-white/10

rounded-3xl

p-5

mb-8

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







{/* Chat Container */}



<div

className="
bg-slate-900/50

border

border-white/10

rounded-3xl

p-2
sm:p-4

shadow-2xl

"

>

<ChatBox/>

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


<div
className="
text-blue-400
"
>

{icon}

</div>



<div>


<h3
className="
font-bold
"
>

{title}

</h3>



<p
className="
text-sm
text-gray-400
"
>

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


<p
className="
text-xs
text-gray-400
"
>

{title}

</p>



<p
className="
font-semibold
"
>

{value}

</p>


</div>


</div>


)

}