import React from 'react'
import {Link} from 'react-router-dom'
import { CartContext } from '../../../context/CarContext'


const Item = ({product}) => {
  const {img, name, description,id} = product

  return (
    <div className="card" style={{width:'20rem', margin:'.5rem'}}>
    <img src={img}className="card-img-top" alt={name}/>
    <div className="card-body"> 
        <p className="card-text">{name}</p>
        <p className="card-text">{description}</p>
    </div>
    <Link to={`/detail/${id}`}>Ver Detalles </Link>
</div>
  )
}

export default Item