import ChatBox from "../components/ChatBox";


export default function Chat(){

return (

<div className="
min-h-screen
bg-slate-950
text-white
px-6
py-16
">


<div className="
max-w-5xl
mx-auto
">


<div className="
text-center
mb-10
">


<h1 className="
text-4xl
md:text-5xl
font-bold
">

NEURA-1 Chat

</h1>


<p className="
mt-4
text-gray-400
">

تحدث مع نظام الذكاء الاصطناعي العربي

</p>


</div>



<ChatBox />


</div>


</div>

)

}