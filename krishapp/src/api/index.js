import axios from "axios"

const url="https://covid19.mathdro.id/api"


 export const fetchData = async () =>{
     try{
          const {data:{confirmed,recovered,deaths,lastupdates}}= await axios.get(url)
        return{confirmed,recovered,deaths,lastupdates}
     }
     catch(error){

     }
 }

 export const fetchDailyData = async ()  => {
   try{
        const {data} = await axios.get(`${url}/daily`)
        console.log(data)
   }
   catch(error){
   
 }
}