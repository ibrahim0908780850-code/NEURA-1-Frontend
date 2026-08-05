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

    if (!message.trim() || loading) return;


    const currentMessage = message;


    setMessages(prev => [
      ...prev,
      {
        role: "user",
        text: currentMessage
      }
    ]);


    setMessage("");
    setLoading(true);



    try {


      const data = await sendMessage(
        currentMessage
      );


      let aiResponse =
        "لم يتم استلام رد";


      if(data?.response){

        if(typeof data.response === "string"){

          aiResponse = data.response;

        }else{

          aiResponse =
          data.response.message ||
          JSON.stringify(data.response);

        }

      }


      setMessages(prev => [
        ...prev,
        {
          role:"ai",
          text:aiResponse
        }
      ]);



    } catch(error){


      setMessages(prev => [
        ...prev,
        {
          role:"ai",
          text:
          "حدث خطأ أثناء الاتصال بـ NEURA-1"
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
    max-w-4xl
    mx-auto
    bg-slate-900/80
    backdrop-blur-xl
    border
    border-white/10
    rounded-3xl
    shadow-2xl
    overflow-hidden
    "
    >



      {/* Header */}

      <div
      className="
      p-5
      border-b
      border-white/10
      flex
      items-center
      gap-3
      "
      >

        <div className="
        bg-blue-600
        p-3
        rounded-xl
        ">

          <Bot
          className="text-white"
          />

        </div>


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
          Arabic AI Assistant
          </p>


        </div>


      </div>





      {/* Messages */}

      <div
      className="
      h-[450px]
      overflow-y-auto
      p-6
      space-y-5
      "
      >


      {
        messages.map((msg,index)=>(


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


          {
          msg.role==="ai" &&
          <Bot
          className="
          text-blue-400
          mt-2
          "
          />
          }



          <div
          className={`
          max-w-[75%]
          p-4
          rounded-2xl
          leading-7
          ${
          msg.role==="user"
          ?
          "bg-blue-600 text-white"
          :
          "bg-white/10 text-gray-100"
          }
          `}
          >

          {msg.text}

          </div>



          {
          msg.role==="user" &&
          <User
          className="
          text-gray-300
          mt-2
          "
          />
          }


          </div>


        ))
      }




      {
      loading &&

      <div className="
      flex
      items-center
      gap-2
      text-gray-400
      "
      >

      <Bot size={18}/>

      NEURA يفكر...

      </div>

      }



      </div>





      {/* Input */}


      <div
      className="
      p-5
      border-t
      border-white/10
      flex
      gap-3
      "
      >


      <input

      value={message}

      onChange={
        e=>setMessage(e.target.value)
      }


      onKeyDown={
        e=>{
          if(e.key==="Enter"){
            handleSend();
          }
        }
      }


      placeholder="اكتب رسالتك إلى NEURA-1..."


      className="
      flex-1
      bg-black/30
      border
      border-white/10
      rounded-xl
      px-5
      py-3
      text-white
      outline-none
      focus:border-blue-500
      "

      />




      <button

      onClick={handleSend}


      disabled={loading}


      className="
      bg-blue-600
      hover:bg-blue-700
      disabled:opacity-50
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