import React from 'react'
import './footer.css'
function Footer() {
  return (
    <div>
      <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <h2>Scentora</h2>
                    <p>
                        We have perfumes that suits your <br />style and which you’re proud.
                    </p>
                    <div className="social-icons">
                        <a href="#"><img src="/assets/icons/twitter.png" alt="" /></a>
                        <a href="#"><img src="/assets/icons/fb2.png" alt="" /></a>
                        <a href="#"><img src="/assets/icons/insta.png" alt="" /></a>
                        <a href="#"><img src="/assets/icons/git.png" alt="" /></a>
                    </div>
                </div>

                <div className="footer-links">
                    <div className="footer-column">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Works</a></li>
                            <li><a href="#">Career</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Help</h3>
                        <ul>
                            <li><a href="#">Customer Support</a></li>
                            <li><a href="#">Delivery Details</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>FAQ</h3>
                        <ul>
                            <li><a href="#">Account</a></li>
                            <li><a href="#">Manage Deliveries</a></li>
                            <li><a href="#">Orders</a></li>
                            <li><a href="#">Payments</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>Scentora © 2000-2023, All Rights Reserved</p>
                <div className="payment-icons">
                    <img src="/assets/icons/visa.png" alt="Visa" />
                    <img src="/assets/icons/master.png" alt="MasterCard" />
                    <img src="/assets/icons/paypal.png" alt="PayPal" />
                    <img src="/assets/icons/applepay.png" alt="Apple Pay" />
                    <img src="/assets/icons/gpay.png" alt="Google Pay" />
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer
