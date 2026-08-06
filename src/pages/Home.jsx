import { Link } from "react-router-dom";
import {
  Brain,
  Code2,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  Database,
  Cpu,
  Network
} from "lucide-react";


export default function Home(){

return (

<div className="
min-h-screen
bg-slate-950
text-white
overflow-hidden
relative
">


{/* Background Glow */}

<div className="
absolute
top-0
left-1/2
-translate-x-1/2
w-[700px]
h-[400px]
bg-blue-600/20
blur-[120px]
rounded-full
"/>



{/* Hero */}

<section className="
relative
max-w-7xl
mx-auto
px-6
py-28
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
/>

<span className="
text-sm
text-gray-300
">

Arabic First AI Platform

</span>

</div>




<h1 className="
text-5xl
md:text-7xl
font-bold
">

NEURA-1

<span className="
block
bg-gradient-to-r
from-blue-400
to-cyan-400
text-transparent
bg-clip-text
">

AI Intelligence Layer

</span>

</h1>



<p className="
max-w-3xl
mx-auto
mt-8
text-lg
leading-relaxed
text-gray-400
">

منصة ذكاء اصطناعي عربية متقدمة تجمع بين
النماذج الذكية، الذاكرة، الأتمتة، وتحليل البيانات
لبناء تطبيقات SaaS مستقبلية.

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
transition
"

>

ابدأ تجربة NEURA

<ArrowRight/>

</Link>


<button

className="
px-8
py-4
rounded-2xl
border
border-white/20
bg-white/5
hover:bg-white/10
"

>

استكشاف المعمارية

</button>


</div>


</section>





{/* System Modules */}

<section className="
max-w-6xl
mx-auto
px-6
pb-24
grid
md:grid-cols-3
gap-6
">


<Card
icon={<Brain/>}
title="AI Core"
text="محرك ذكاء اصطناعي لفهم اللغة العربية وتشغيل المهام الذكية."
/>


<Card
icon={<Database/>}
title="AI Memory"
text="نظام ذاكرة ومعرفة لإدارة السياق والمعلومات."
/>


<Card
icon={<Network/>}
title="AI Router"
text="توجيه ذكي بين النماذج والخدمات المختلفة."
/>


<Card
icon={<Code2/>}
title="Developer Agent"
text="وكيل برمجي لتحليل الأكواد وإنشاء الحلول."
/>


<Card
icon={<Cpu/>}
title="Automation"
text="تشغيل عمليات ذكية وربط الأنظمة الخارجية."
/>


<Card
icon={<ShieldCheck/>}
title="Security"
text="بنية آمنة قابلة للتوسع لمنصات SaaS."
/>



</section>





{/* Version */}

<section className="
text-center
pb-16
text-gray-500
">


NEURA-1 v0.9.0

<br/>

Arabic First AI Cloud Intelligence System


</section>



</div>

)

}




function Card({icon,title,text}){

return (

<div className="
bg-white/5
border
border-white/10
rounded-3xl
p-8
hover:bg-white/10
transition
">

<div className="
text-blue-400
mb-5
">

{icon}

</div>


<h3 className="
text-xl
font-bold
mb-3
">

{title}

</h3>


<p className="
text-gray-400
leading-relaxed
">

{text}

</p>


</div>

)

}