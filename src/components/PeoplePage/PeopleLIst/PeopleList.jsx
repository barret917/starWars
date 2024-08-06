import style from './PeopleList.module.css';
import { PropTypes } from 'prop-types';
const PeopleList=({people,name,id})=>{
    return (
        
         <ul  className={style.list_container}>
                {people.map(({name,id,img})=>{
                   return <li className={style.list_item} key={id}>
                        <img className={style.list_img} src={img}></img>
                        <p className={style.list_person}>{name}</p>
                    </li>
                })}
            </ul>
        
    )
}

PeopleList.propTypes={
    people:PropTypes.array
}
export default PeopleList;