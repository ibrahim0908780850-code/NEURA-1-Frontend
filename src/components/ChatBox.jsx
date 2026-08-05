import { useState } from "react";
import { Send, Bot, User } from "lucide-react";
import { sendMessage } from "../services/api";


export default function ChatBox() {

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "مرحباً، أنا NEURA-1. كيف يمكنني مساعدتك؟"
    }
  ]);

  const [loading, setLoading] = useState(false);


  async function handleSend() {

    if (!message.trim()) return;


    const userMessage = {
      role: "user",
      text: message
    };


    setMessages(prev => [
      ...prev,
      userMessage
    ]);


    setMessage("");
    setLoading(true);


    try {

      const data = await sendMessage(
        message
      );


      setMessages(prev => [
        ...prev,
        {
          role: "ai",
          text:
          data.response ||
          "لم يتم استلام رد"
        }
      ]);


    } catch(error) {

      setMessages(prev => [
        ...prev,
        {
          role:"ai",
          text:"حدث خطأ في الاتصال بالخادم"
        }
      ]);

    }


    setLoading(false);

  }



  return (

    <div className="
    w-full
    max-w-3xl
    mx-auto
    bg-slate-900/80
    border
    border-white/10
    rounded-3xl
    shadow-2xl
    overflow-hidden
    ">


      {/* Header */}

      <div className="
      p-5
      border-b
      border-white/10
      flex
      items-center
      gap-3
      ">

        <Bot className="text-blue-400"/>

        <div>

          <h2 className="
          text-xl
          font-bold
          text-white
          ">
            NEURA-1
          </h2>

          <p className="
          text-sm
          text-gray-400
          ">
            Arabic-first AI System
          </p>

        </div>

      </div>



      {/* Messages */}

      <div className="
      h-[450px]
      overflow-y-auto
      p-5
      space-y-4
      ">


      {
        messages.map((msg,index)=>(

          <div
          key={index}
          className={`
          flex
          gap-3
          ${msg.role==="user"
          ?"justify-end"
          :"justify-start"}
          `}
          >


          {
            msg.role==="ai" &&
            <Bot className="text-blue-400 mt-2"/>
          }


          <div className={`
          max-w-[80%]
          p-4
          rounded-2xl
          ${
          msg.role==="user"
          ?
          "bg-blue-600 text-white"
          :
          "bg-white/10 text-gray-100"
          }
          `}>

            {msg.text}

          </div>


          {
            msg.role==="user" &&
            <User className="text-gray-300 mt-2"/>
          }


          </div>

        ))
      }


      {
        loading &&
        <p className="
        text-gray-400
        ">
          NEURA يفكر...
        </p>
      }


      </div>




      {/* Input */}

      <div className="
      p-5
      border-t
      border-white/10
      flex
      gap-3
      ">


      <input

      value={message}

      onChange={
        e=>setMessage(e.target.value)
      }

      onKeyDown={
        e=>{
          if(e.key==="Enter")
          handleSend();
        }
      }

      placeholder="اكتب رسالتك إلى NEURA..."

      className="
      flex-1
      bg-black/30
      border
      border-white/10
      rounded-xl
      px-4
      py-3
      text-white
      outline-none
      "

      />



      <button

      onClick={handleSend}

      className="
      bg-blue-600
      hover:bg-blue-700
      px-5
      rounded-xl
      text-white
      "

      >

        <Send size={20}/>

      </button>


      </div>


    </div>

  );
}