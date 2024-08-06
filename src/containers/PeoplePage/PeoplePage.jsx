import { useEffect,useState } from "react";
import { getApiResource } from "../../response/axiosResponse";
import { API } from "../../constant/api";
import { getPeopleId,getPeopleImg } from "../../service/getPeopleData";
import { withErrorApi } from "../../hoc-halpers/withErrorApi";
import PeopleList from "../../components/PeoplePage/PeopleLIst"

import style from "./PeoplePage.module.css"

  const PeoplePage=({setErrorApi})=>{
    // предназначена для хранения массива обектов response
     const[people,setPeople]=useState(null) 
    

     
    // асинхронная функция которая вызывается с аргументом апишки в useEffect в момент монтирования компонента. 
    async function getResource(url){
     const response=await getApiResource(url)
     const data=await response.data.results

    //  выводит новый массив обьектов в котором хранятся только name и url
      if(response){
         const peopleList= data.map(({name,url})=>{
            const id=getPeopleId(url)
            const img=getPeopleImg(id) //данная функция возвращает сыллку на изображение
            setErrorApi(false)
            return {name,id,img}
         })

    // передаем массив обьектов response
        setPeople(peopleList)
       }else{
        setErrorApi(true)
       }
     }

      useEffect(()=>{
      getResource(API)
      },[])
     return(
       <div>
          {people&&<PeopleList people={people}/>}
       </div>
     )
   }

export default withErrorApi(PeoplePage)