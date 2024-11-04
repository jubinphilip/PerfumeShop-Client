'use client'
import React, { useEffect, useState } from 'react'
import './perfumes.css'
import axios from 'axios'

function Perfumes() {
    const[data,setData]=useState([])
    useEffect(()=>
    {
        async function fetchData()
        {
            const url='http://localhost:9000/user/getdata'
            const response=await axios.get(url)
            setData(response.data)
            console.log(response.data)
        }
        fetchData()
    },[])

    async function handleClick(id,price)
    {
            console.log(id)
            const user=sessionStorage.getItem('userid')
            console.log(user)
            const record={
                userid:user,
                itemid:id,
                count:1,
                price:price
            }
            const url='http://localhost:9000/user/addtocart'
            const response=await axios.post(url,record)

    }
  return (
 
       <div className="collection-right">
                    <div className="our-collections">Our Collections</div>
                    <div className="results-info">
                        <div className="results-count">Showing 06 results</div>
                        <div className="sort-by">
                            <span>Sorted by : <b>Popularity</b>
                                <img className="mt-50" src="/assets/img/down-arrow.svg" alt="" />
                            </span>
                        </div>
                    </div>

                <div className="className-card" >
                {data.map((item)=>(<div className="product-card" key={item._id}>
                            <div className="text-center image-wrap">
                                <div className="image-block">
                                    <img src={`http://localhost:9000/Images/${item.image}`} alt="Product" className="product-image" />
                                 
                                </div>
                                <div className="heart-wrapper">
                                    <img src="/assets/img/heart.svg" alt="Heart" className="heart-image" />
                                  
                                </div>

                                <div className="badge-wrapper">
                                    <img src="/assets/img/badge.svg" alt="Heart" className="badge-wrapper" />
                                 
                                </div>
                            </div>

                            <div className="details-block">
                                <div className="head-1">{item.name}</div>
                                <p className="sub-head-1">Cool Water Eau De Toilette for Men</p>
                                <p className="price">$ {item.price}</p>
                       
                                    <button className="buy-button" onClick={()=>handleClick(item._id,item.price)}>Add to Cart</button>
                            </div>
                        </div>))}
                    </div>
                </div>
  )
}

export default Perfumes