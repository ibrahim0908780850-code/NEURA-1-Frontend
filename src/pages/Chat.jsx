import ChatBox from "../components/ChatBox";
import { Brain, Sparkles, ShieldCheck } from "lucide-react";


export default function Chat(){

return (

<div
className="
min-h-screen
bg-slate-950
text-white
px-6
py-16
relative
overflow-hidden
"
dir="rtl"
>


{/* Background Glow */}

<div
className="
absolute
top-20
right-20
w-72
h-72
bg-blue-600/20
rounded-full
blur-3xl
"
/>


<div
className="
absolute
bottom-20
left-20
w-72
h-72
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
mb-12
"
>


<div
className="
inline-flex
items-center
gap-2
bg-white/10
border
border-white/10
px-5
py-2
rounded-full
mb-6
"
>

<Sparkles
size={18}
className="text-blue-400"
/>

<span className="
text-sm
text-gray-300
">

NEURA-1 Online

</span>


</div>




<h1
className="
text-5xl
md:text-6xl
font-bold
"
>

تحدث مع

<span className="
text-blue-500
block
mt-2
">

NEURA-1

</span>


</h1>



<p
className="
mt-5
text-gray-400
text-lg
max-w-2xl
mx-auto
"
>

نظام ذكاء اصطناعي عربي متقدم
للمحادثة، التحليل، والمساعدة التقنية.

</p>


</div>





{/* System Cards */}

<div
className="
grid
md:grid-cols-3
gap-4
mb-10
"
>


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
"
>

<Brain
className="text-blue-400"
/>

<div>

<h3 className="font-bold">
AI Engine
</h3>

<p className="text-sm text-gray-400">
محرك الذكاء الاصطناعي
</p>

</div>

</div>




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
"
>

<ShieldCheck
className="text-green-400"
/>

<div>

<h3 className="font-bold">
Secure
</h3>

<p className="text-sm text-gray-400">
Cloud API
</p>

</div>

</div>




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
"
>

<Sparkles
className="text-purple-400"
/>

<div>

<h3 className="font-bold">
Version
</h3>

<p className="text-sm text-gray-400">
v1.0.0
</p>

</div>

</div>


</div>





{/* Chat */}

<ChatBox />



</div>


</div>

)

}