import { Link } from "react-router-dom";
import { 
  Brain,
  Code2,
  Sparkles,
  ShieldCheck,
  ArrowRight
} from "lucide-react";


export default function Home(){

return (

<div className="
min-h-screen
bg-slate-950
text-white
overflow-hidden
">


{/* Hero */}

<section className="
max-w-7xl
mx-auto
px-6
py-24
text-center
">


<div className="
inline-flex
items-center
gap-2
px-5
py-2
rounded-full
bg-white/10
border
border-white/10
mb-8
">

<Sparkles 
className="text-blue-400"
size={18}
/>

<span className="
text-sm
text-gray-300
">
Arabic First AI Cloud System
</span>

</div>



<h1 className="
text-5xl
md:text-7xl
font-bold
leading-tight
">

NEURA-1

<span className="
block
text-blue-500
">

Intelligent AI Platform

</span>

</h1>



<p className="
max-w-3xl
mx-auto
mt-8
text-lg
text-gray-400
">

نظام ذكاء اصطناعي عربي متقدم يجمع بين
الذكاء الاصطناعي، الأتمتة، وتحليل البيانات
لبناء حلول رقمية ذكية وقابلة للتوسع.

</p>



<div className="
mt-10
flex
justify-center
gap-4
flex-wrap
">


<Link

to="/chat"

className="
flex
items-center
gap-2
bg-blue-600
hover:bg-blue-700
px-8
py-4
rounded-2xl
font-semibold
"

>

ابدأ المحادثة

<ArrowRight size={20}/>

</Link>



<button

className="
px-8
py-4
rounded-2xl
border
border-white/20
bg-white/5
"

>

استكشاف النظام

</button>


</div>


</section>





{/* Features */}

<section className="
max-w-6xl
mx-auto
px-6
pb-24
grid
md:grid-cols-3
gap-6
">


<div className="
bg-white/5
border
border-white/10
rounded-3xl
p-8
">

<Brain
className="text-blue-400 mb-5"
/>

<h3 className="
text-xl
font-bold
mb-3
">

AI Engine

</h3>


<p className="
text-gray-400
">

محرك ذكاء اصطناعي قادر على
فهم اللغة العربية ومعالجة الطلبات
بشكل ذكي.

</p>

</div>





<div className="
bg-white/5
border
border-white/10
rounded-3xl
p-8
">

<Code2
className="text-blue-400 mb-5"
/>


<h3 className="
text-xl
font-bold
mb-3
">

Developer Agent

</h3>


<p className="
text-gray-400
">

مساعد برمجي لتحليل الأكواد
وتطوير الحلول التقنية.

</p>

</div>





<div className="
bg-white/5
border
border-white/10
rounded-3xl
p-8
">


<ShieldCheck
className="text-blue-400 mb-5"
/>


<h3 className="
text-xl
font-bold
mb-3
">

Secure Architecture

</h3>


<p className="
text-gray-400
">

بنية آمنة وقابلة للتوسع
لإنشاء منتجات SaaS مستقبلية.

</p>


</div>


</section>




{/* Footer Text */}

<section className="
text-center
pb-16
text-gray-500
">

NEURA-1 v0.9.0  
<br/>
Arabic-first AI Cloud System

</section>


</div>

)

}