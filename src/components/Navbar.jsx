import { Link, useLocation } from "react-router-dom";
import { Brain, Circle, MessageSquare, House } from "lucide-react";
import { useEffect, useState } from "react";
import { getHealth } from "../services/api";

export default function Navbar() {

  const location = useLocation();

  const [online, setOnline] = useState(false);

  useEffect(() => {

    async function checkHealth() {

      try {

        const data = await getHealth();

        setOnline(
          data?.status === "healthy"
        );

      } catch {

        setOnline(false);

      }

    }

    checkHealth();

    const interval = setInterval(
      checkHealth,
      30000
    );

    return () => clearInterval(interval);

  }, []);

  return (

    <nav className="
    sticky
    top-0
    z-50
    w-full
    border-b
    border-slate-800
    bg-slate-950/90
    backdrop-blur-xl
    ">

      <div className="
      max-w-7xl
      mx-auto
      px-4
      sm:px-6
      h-16
      flex
      items-center
      justify-between
      ">

        <Link
          to="/"
          className="flex items-center gap-3"
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

            <Brain className="text-white"/>

          </div>

          <div>

            <h1 className="
            text-white
            font-bold
            text-lg
            ">
              NEURA-1
            </h1>

            <div className="
            flex
            items-center
            gap-2
            text-xs
            ">

              <Circle
                size={10}
                fill="currentColor"
                className={
                  online
                    ? "text-green-400"
                    : "text-red-500"
                }
              />

              <span className="text-slate-400">

                {online ? "Online" : "Offline"}

              </span>

            </div>

          </div>

        </Link>

        <div className="flex items-center gap-2">

          <Link
            to="/"
            className={`
            flex
            items-center
            gap-2
            px-3
            py-2
            rounded-xl
            transition
            ${
              location.pathname === "/"
                ? "bg-blue-600 text-white"
                : "text-slate-300 hover:bg-slate-800"
            }
            `}
          >

            <House size={18}/>
            <span className="hidden sm:block">
              الرئيسية
            </span>

          </Link>

          <Link
            to="/chat"
            className={`
            flex
            items-center
            gap-2
            px-3
            py-2
            rounded-xl
            transition
            ${
              location.pathname === "/chat"
                ? "bg-blue-600 text-white"
                : "text-slate-300 hover:bg-slate-800"
            }
            `}
          >

            <MessageSquare size={18}/>

            <span className="hidden sm:block">
              المحادثة
            </span>

          </Link>

        </div>

      </div>

    </nav>

  );

}