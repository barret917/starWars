import { SWAPI_PEOPLE,HTTPS,SWAPI_ROOT,FORMAT,IMG } from "../constant/api"

//Функция getId возвращает номер id без адреса url
const getId=(url,category)=>{

     const id=url.replace(HTTPS+SWAPI_ROOT+category,"")
     .replace(/\//g,"")

     return id
}

//В getPeopleId мы передаем конкоетный аргумент в файле PeoplePage.jsx и прокидываем ее функции getId ,
//  а  getId мы вызываем с аргументом url кооторый нам передал getPeoleId и вторым аргументом Swapi_People
export const getPeopleId=(url)=>{return getId(url,SWAPI_PEOPLE)}


export const getPeopleImg=(id)=>`${IMG}${id}${FORMAT}`