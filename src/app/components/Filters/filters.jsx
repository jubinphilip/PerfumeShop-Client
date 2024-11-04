import React from 'react'
import './filters.css'

function Filters() {
  return (
  
                 <div className="collection-left">
                    <div className="left-box">
                        <div className="filter-main">
                            <p className="top-filter">Filter</p>
                            <p className="top-clear">Clear All</p>
                        </div>

                        <div>
                            <div className="tag">
                                <div>
                                    <span className="tag-text">Armani Code</span>
                                    <img src="/assets/img/x.svg" alt="Close" className="tag-icon" />
                                </div>
                            </div>

                            <div className="d-flex gp-10">
                                <div className="tag">
                                    <div>
                                        <span className="tag-text">Cool water</span>
                                        <img src="/assets/img/x.svg" alt="Close" className="tag-icon" />
                                    </div>
                                </div>

                                <div className="tag">
                                    <div>
                                        <span className="tag-text">CK</span>
                                        <img src="/assets/img/x.svg" alt="Close" className="tag-icon" />
                                    </div>
                                </div>
                            </div>

                            <div className="tag">
                                <div>
                                    <span className="tag-text">Gucci Bloom</span>
                                    <img src="/assets/img/x.svg" alt="Close" className="tag-icon" />
                                </div>
                            </div>

                            <div className="tag">
                                <div>
                                    <span className="tag-text">Lataffa</span>
                                    <img src="/assets/img/x.svg" alt="Close" className="tag-icon" />
                                </div>
                            </div>

                            <div className="tag">
                                <div>
                                    <span className="tag-text">Channel No.5</span>
                                    <img src="/assets/img/x.svg" alt="Close" className="tag-icon" />
                                </div>
                            </div>
                        </div>

                        <div className="border-bottom">
                            <hr className="hr" />
                        </div>

                        <div className="">
                            <div className="gender-feild">
                                <div>Gender</div>
                                <img src="/assets/img/right-arrow.svg" alt="" />
                            </div>

                            <div className="gender-feild">
                                <div>Discount</div>
                                <img src="/assets/img/right-arrow.svg" alt="" />
                            </div>

                            <div className="gender-feild">
                                <div>Price</div>
                                <img src="/assets/img/right-arrow.svg" alt="" />
                            </div>
                        </div>

                        <div className="border-bottom">
                            <hr className="hr" />
                        </div>

                        <div className="brand-wrapper">
                            <div className="brand-title">Brands</div>

                            <input type="text" placeholder="   Search Brand" className="search-field" />
                           
                            <div>
                                <div className="checkbox-wrapper">
                                    <label>
                                        <input type="checkbox" className="brand-checkbox" />
                                       
                                        Ajmal
                                    </label>
                                </div>

                                <div className="checkbox-wrapper">
                                    <label>
                                        <input type="checkbox" className="brand-checkbox" />
                                       
                                        Armani Code
                                    </label>
                                </div>

                                <div className="checkbox-wrapper">
                                    <label>
                                        <input type="checkbox" className="brand-checkbox" />
                                       
                                        Cool water
                                    </label>
                                </div>
                                <div className="checkbox-wrapper">
                                    <label>
                                        <input type="checkbox" className="brand-checkbox" />
                                       
                                        Channel No. 5
                                    </label>
                                </div>

                                <div className="checkbox-wrapper">
                                    <label>
                                        <input type="checkbox" className="brand-checkbox" />
                                       
                                        Calvin Klein
                                    </label>
                                </div>

                                <div className="checkbox-wrapper">
                                    <label>
                                        <input type="checkbox" className="brand-checkbox" />
                                       
                                        Gucci Bloom
                                    </label>
                                </div>

                                <div className="checkbox-wrapper">
                                    <label>
                                        <input type="checkbox" className="brand-checkbox" />
                                       
                                        Lataffa
                                    </label>
                                </div>

                                <div className="checkbox-wrapper">
                                    <label>
                                        <input type="checkbox" className="brand-checkbox" />
                                       
                                        La French
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

  )
}

export default Filters
