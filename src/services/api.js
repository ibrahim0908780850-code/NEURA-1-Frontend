const API_URL =
"https://neura-production-fdfa.up.railway.app";


export async function sendMessage(message){

  const response = await fetch(
    `${API_URL}/api/chat`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({

        user_id: "guest",

        message: message

      })

    }
  );


  if(!response.ok){

    throw new Error(
      "NEURA API Error"
    );

  }


  const data = await response.json();


  return data;

}



export async function getStatus(){

  const response = await fetch(
    `${API_URL}/api/status`
  );


  return await response.json();

}



export async function getHealth(){

  const response = await fetch(
    `${API_URL}/api/health`
  );


  return await response.json();

}