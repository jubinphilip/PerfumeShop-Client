'use client'
import React, { useState,useEffect } from 'react'
import axios from 'axios'
import './cart.css'
import { useRouter } from 'next/navigation'
function Cart() {
  const[data,setData]=useState([])
  const[quantity,setQuantity]=useState(1)
  const[rate,setRate]=useState('')
  const length=data?data.length:''
  let total=0
  for(let i=0;i<length;i++)
  {
    total=Number(data[i].itemid.price)+total
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
      const response=await axios.get(url)
      setData(response.data.data)
      setRate(response.pricedetails)
      console.log(response.data.pricedetails)
  }
  useEffect(()=>
  {
      fetchData()
  },[])

  async function handleDelete(id)
  {
    const url=`http://localhost:9000/user/deleteOrder/${id}`
 
    const response=await axios.post(url)
    fetchData()
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
            <p className="price">${item.itemid.price}</p>
            <div className="pop">
              <p className="offer">
                1 Offers Available
                <span className="offer-image"><img src="/assets/icons/iemo.png" alt="" /></span>
              </p>
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
        <span>${total}</span>
      </div>
      <div className="summary-item">
        <span>Discount</span>
        <span className="discount">- $450</span>
      </div>
      <div className="pop">
        <p className="offers-applied" >3 offers Applied <span className="info-icon">i</span></p>
        <div id="offersModal" className="modal">
          <div className="modal-content">
            <span className="close">&times;</span>
            <h4>5 Offers Applied</h4>
            <ul>
              <li><strong>Buy 1 Get 1 <span className="free-label">Free</span></strong></li>
              <li>Buy 3 or More & Pay Just <strong>$75 Each!</strong></li>
              <li>Special Combo: Buy Cool Water + Calvin Klein & Get <strong>$10 Off</strong> on Calvin Klein</li>
              <li>Limited Time Only: <strong>15% Off</strong> When You Buy in the Next 2 Days</li>
              <li>Gucci Deal: Save More When You Buy More! Buy 2 units for <strong>10% off</strong>, or 4+ units for
                <strong>20% off</strong>.</li>
            </ul>
            <div className="total-discount">
              <span>Total Discount</span>
              <span className="discount-amount">- $345</span>
            </div>
          </div>
        </div>
      </div>
      <div className="summary-item total">
        <span>Total</span>
        <span>$940</span>
      </div>
      <p className="congrats-message">
        Congratulations! You've Saved $450 today!
      </p>
      <button className="checkout-btn">Go to Checkout</button>
    </div>
  </div>
    </div>
  )
}

export default Cart
