import axios from "axios"

async function getApiResource(url){
  try{const res=await axios.get(url)
    console.log(res)
    return res
  }
  catch(error){
    console.error(error)
  }
}

export {getApiResource}
