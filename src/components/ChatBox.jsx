import { useState, useRef, useEffect } from "react";
import { Send, Bot, User } from "lucide-react";
import { sendMessage } from "../services/api";


export default function ChatBox() {

const [message, setMessage] = useState("");

const [messages, setMessages] = useState([
{
role: "ai",
text: "مرحباً، أنا NEURA-1. كيف يمكنني مساعدتك؟",
},
]);


const [loading, setLoading] = useState(false);

const messagesEndRef = useRef(null);



useEffect(()=>{

messagesEndRef.current?.scrollIntoView({
behavior:"smooth",
});

},[messages,loading]);




async function handleSend(){

if(!message.trim() || loading) return;


const currentMessage = message;


setMessages(prev=>[
...prev,
{
role:"user",
text:currentMessage
}
]);


setMessage("");

setLoading(true);



try{


const data = await sendMessage(currentMessage);


let aiResponse = "تعذر الحصول على رد.";


if(typeof data?.response === "string"){

aiResponse = data.response;

}

else if(data?.response?.response){

aiResponse = data.response.response;

}

else if(data?.response?.message){

aiResponse = data.response.message;

}

else if(data?.response?.error){

aiResponse =
"⚠️ حدث خطأ في نموذج الذكاء الاصطناعي.";

}




setMessages(prev=>[
...prev,
{
role:"ai",
text:aiResponse
}
]);


}

catch(error){


setMessages(prev=>[
...prev,
{
role:"ai",
text:"❌ تعذر الاتصال بخادم NEURA-1."
}
]);


}



setLoading(false);

}





return (

<div

dir="rtl"

className="
w-full
max-w-5xl
mx-auto

h-[calc(100vh-140px)]
sm:h-[700px]

bg-slate-900/90

border
border-white/10

rounded-2xl
sm:rounded-3xl

overflow-hidden

shadow-2xl

flex
flex-col

"

>



{/* Header */}


<div

className="
flex
items-center
gap-3

p-4

border-b
border-white/10

bg-slate-900/80

"

>


<div

className="
bg-blue-600
p-3
rounded-xl
shadow-lg
shadow-blue-900/40
"

>

<Bot className="text-white"/>

</div>



<div>

<h2
className="
text-xl
font-bold
text-white
"
>

NEURA-1

</h2>


<p
className="
text-sm
text-slate-400
"
>

Arabic AI Assistant

</p>


</div>


</div>





{/* Messages */}


<div

className="
flex-1

overflow-y-auto

bg-slate-950/80

p-4

space-y-5

"

>


{messages.map((msg,index)=>(


<div

key={index}

className={`

flex
gap-3
items-start

${

msg.role==="user"

?

"justify-start"

:

"justify-end"

}

`}

>



{msg.role==="ai" && (

<Bot

className="
text-blue-400
mt-2
shrink-0
"

/>

)}





<div

className={`

max-w-[90%]

sm:max-w-[75%]

p-4

rounded-2xl

leading-7

whitespace-pre-wrap

break-words


${

msg.role==="user"

?

`

bg-blue-600

text-white

shadow-lg

shadow-blue-900/30

`

:

`

bg-slate-800/90

text-slate-100

border

border-blue-500/20

shadow-lg

`

}

`}

>

{msg.text}

</div>





{msg.role==="user" && (

<User

className="
text-slate-300
mt-2
shrink-0
"

/>

)}



</div>


))}





{loading && (

<div

className="
flex
items-center
gap-3

text-blue-400

animate-pulse

"

>


<Bot size={18}/>


<span>

NEURA-1 يحلل...

</span>


</div>

)}





<div ref={messagesEndRef}/>


</div>





{/* Input */}



<div

className="
border-t
border-white/10

bg-slate-900/90

p-4

"

>


<div

className="
flex
items-center
gap-2

"

>


<input


value={message}


onChange={(e)=>setMessage(e.target.value)}


onKeyDown={(e)=>{

if(e.key==="Enter"){

handleSend();

}

}}


placeholder="اكتب رسالتك إلى NEURA-1..."


className="

flex-1

bg-slate-800/80

border

border-white/10

rounded-2xl

px-4

py-3

text-white

placeholder:text-slate-500

outline-none

focus:border-blue-500

transition

"


/>





<button

onClick={handleSend}

disabled={loading}


className="

w-12

h-12

rounded-xl

bg-blue-600

hover:bg-blue-500

disabled:opacity-50

flex

items-center

justify-center

text-white

transition

shadow-lg

shadow-blue-900/30

"

>


<Send size={20}/>


</button>



</div>


</div>



</div>


);

}