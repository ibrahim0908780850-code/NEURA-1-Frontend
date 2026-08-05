const API_URL =
"https://neura-production-fdfa.up.railway.app";


export async function sendMessage(message){

const response = await fetch(
`${API_URL}/api/chat`,
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({

user_id:"guest",
message:message

})
}
);


return await response.json();

}