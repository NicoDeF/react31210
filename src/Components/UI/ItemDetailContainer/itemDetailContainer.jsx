import React, {useEffect,useState} from 'react'
import ItemDetail from '../ItemDetail/itemDetail';

const oneProd = {id:14, image:'https://rickandmortyapi.com/api/character/avatar/14.jpeg', name:'Alien Morty'}

export const ItemDetailContainer = () =>{
const [data,setData] = useState({})

useEffect(() => {
    const getData = new Promise (resolve => {
        setTimeout(() => {
            resolve(oneProd)
        }, 3000);
        })

        getData.then(res => setData(res))
    }, [])


    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer