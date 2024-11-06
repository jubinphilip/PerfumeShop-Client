'use client'
import React, { useState,useEffect } from 'react'
import axios from 'axios'
import './cart.css'
import { useRouter } from 'next/navigation'
function Cart() {
  const[data,setData]=useState([])
  const[quantity,setQuantity]=useState(1)
  const[message,setMessage]=useState([])
  const[rate,setRate]=useState('')
  const length=data?data.length:''
  let total=0
  for(let i=0;i<length;i++)
  {
    total=Number(data[i].price)+total
  }
  const user=sessionStorage.getItem('userid')
  const router=useRouter()
  const token=sessionStorage.getItem('token')
  if(!token)
  {
    router.push('/signin')
  }
  async function fetchData()
  {
      const url=`http://localhost:9000/user/getorders/${user}`
      const response=await axios.get(url,{
        headers: { Authorization: `Bearer ${token}` },
      })
      setData(response.data.data)
      setRate(response.data.pricedetails)
      setMessage(response.data.pricedetails.messages)
      console.log(response.data.pricedetails.messages)
      console.log(message)
  }
  useEffect(()=>
  {
      fetchData()
  },[])

  async function handleDelete(id)
  {
    const url=`http://localhost:9000/user/deleteOrder/${id}`
    const response=await axios.post(url,{
      headers: { Authorization: `Bearer ${token}` },
    })
 
    fetchData()
  }

  async function handleSubmit()
  {
    const user=sessionStorage.getItem('userid')
    const data={
        user,
        amount:rate.payable,
    }
    const url='http://localhost:9000/user/addbooking'
    await axios.post(url,data,{
      headers: { Authorization: `Bearer ${token}` },
    })
  }

  async function handleCount(id,operation) {
        const managecount={
      id:id,
      op:operation
    }
    const url=`http://localhost:9000/user/manageCount`
    const response=await axios.post(url,managecount)
    fetchData()
  }

  return (
    <div>
          <section className="breadcrumb-section">
    <div className="breadcrumb"><a href="">Home </a> <a href="">Cart</a></div>
  </section>

  <div className="product-count">
    <h2>{length} Items</h2>
  </div>

  <div className="cart-container">

   

   <div className="product-list" >
   {data?.map((item)=>( <div className="product-container" key={item._id}>
        <div className="product-item">
          <img src={`http://localhost:9000/Images/${item.itemid.image}`} alt="Davidoff" />
          <div className="product-details">
            <div>
              <h3>{item.itemid.name}</h3>
            </div>
            <p>Cool Water Eau De Toilette for Men</p>
            <p className="price">${item.price}</p>
            <div className="pop">
            {item?.itemid?.offers?.map((offer,index)=>(
                    <p className="offer" key={index}>
                    {offer}
                    <span className="offer-image"><img src="/assets/icons/iemo.png" alt="" /></span>
                  </p>
            ))
                 }
              <div className="offer-popup" id="Popup">
                <p><strong>Offers Applied</strong></p>
                <p>Buy 1 Get 1 Free</p>
                <button>Close</button>
              </div>
            </div>
            <div className="quantity-controls">
              <button className="qty-btn" onClick={()=>handleCount(item._id,'-')}>-</button>
              <span className="quantity"> Qty: {item.count}</span>
              <button className="qty-btn" onClick={()=>handleCount(item._id,'+')} >+</button>
            </div>
          </div>
          <div className="product-actions">
            <span className="wishlist-icon">
              <img className="wishlist-icon" src="/assets/icons/delete.png" alt="" onClick={()=>handleDelete(item._id)} />
            </span>
          </div>
        </div>
      </div>)) }
    </div>

   
    <div className="order-summary">
      <h3>Order Details</h3>
      <div className="summary-item">
        <span>Bag total</span>
        <span>${rate?.total}</span>
      </div>
      <div className="summary-item">
        <span>Discount</span>
        <span className="discount">${rate?.discount}</span>
      </div>
      <div className="pop">
        <p className="offers-applied" >offers Applied <span className="info-icon">i</span></p>
        {message?.map((msg,index)=>
        (
          <div key={index}>
            <p className='offer-messages'>{msg}</p>
            </div>
        ))}
      </div>
      <div className="summary-item total">
        <span>Total</span>
        <span>${rate?.payable}</span>
      </div>
      <p className="congrats-message">
        Congratulations! You've Saved {rate?.discount} today!
      </p>
      <button className="checkout-btn" onClick={handleSubmit}>Go to Checkout</button>
    </div>
  </div>
    </div>
  )
}

export default Cart
