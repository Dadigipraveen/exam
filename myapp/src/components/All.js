import React, { useState } from 'react'
import Filter from './Filter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function All() {
    const[filter,setFilter]=useState(false);

    function fun(){
        setFilter(true);
    }
    
    return (

        <>



  
  <div className='filter'>
            <button className='filter me-2' onClick={fun}>Filter</button>
         </div >
       <div className="search-input sea">
      <input
        type="text"
        placeholder="Search..."
    />
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
    </div>  
       
        {filter && <Filter/>}



            <div className='container mt-1'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <div className='card '>
                            <div className='card-body '>
                                <h3>Linkdin</h3>
                                <h4>Memberfive.Budget</h4>
                                <div className='row'>
                                    <div className='col-lg-4'>
                                        <h6>AMOUNT</h6>
                                        <h6>300 SGD</h6>
                                    </div>
                                    <div className='col-lg-4'>
                                        <h6>FREQUENCY</h6>
                                        <h6>monthly</h6>
                                    </div>
                                    <div className='col-lg-4'>
                                        <h6>EXPIRY</h6>
                                        <h6>21 july 2021</h6>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-4'>
                                        <ul>
                                            <li>spent</li>
                                            <li>Balance</li>
                                        </ul>
                                    </div>
                                    <div className='col-lg-4'></div>
                                    <div className='col-lg-4'>
                                        <h6>7890 SGD</h6>
                                        <h6>7890 SGD</h6>

                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='card '>
                            <div className='card-body '>
                                <h3>Marketing Ads</h3>
                                <h4>Memberfive.Budget</h4>
                                <div className='row'>
                                    <div className='col-lg-4'>
                                        <h6>AMOUNT</h6>
                                        <h6>300 SGD</h6>
                                    </div>
                                    <div className='col-lg-4'>
                                        <h6>FREQUENCY</h6>
                                        <h6>monthly</h6>
                                    </div>
                                    <div className='col-lg-4'>
                                        <h6>EXPIRY</h6>
                                        <h6>21 july 2021</h6>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-4'>
                                        <ul>
                                            <li>spent</li>
                                            <li>Balance</li>
                                        </ul>
                                    </div>
                                    <div className='col-lg-4'></div>
                                    <div className='col-lg-4'>
                                        <h6>7890 SGD</h6>
                                        <h6>7890 SGD</h6>

                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='card '>
                            <div className='card-body '>
                                <h3>Offsite event</h3>
                                <h4>Memberfive.Budget</h4>
                                <div className='row'>
                                    <div className='col-lg-4'>
                                        <h6>AMOUNT</h6>
                                        <h6>300 SGD</h6>
                                    </div>
                                    <div className='col-lg-4'>
                                        <h6>FREQUENCY</h6>
                                        <h6>monthly</h6>
                                    </div>
                                    <div className='col-lg-4'>
                                        <h6>EXPIRY</h6>
                                        <h6>21 july 2021</h6>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-4'>
                                        <ul>
                                            <li>spent</li>
                                            <li>Balance</li>
                                        </ul>
                                    </div>
                                    <div className='col-lg-4'></div>
                                    <div className='col-lg-4'>
                                        <h6>7890 SGD</h6>
                                        <h6>7890 SGD</h6>

                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                <div className='row mt-2'>
                    <div className='col-lg-4'>
                        <div className='card '>
                            <div className='card-body '>
                                <h3>Travel allowa....</h3>
                                <h4>Memberfive.Budget</h4>
                                <div className='row'>
                                    <div className='col-lg-4'>
                                        <h6>AMOUNT</h6>
                                        <h6>300 SGD</h6>
                                    </div>
                                    <div className='col-lg-4'>
                                        <h6>FREQUENCY</h6>
                                        <h6>monthly</h6>
                                    </div>
                                    <div className='col-lg-4'>
                                        <h6>EXPIRY</h6>
                                        <h6>21 july 2021</h6>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-4'>
                                        <ul>
                                            <li>spent</li>
                                            <li>Balance</li>
                                        </ul>
                                    </div>
                                    <div className='col-lg-4'></div>
                                    <div className='col-lg-4'>
                                        <h6>7890 SGD</h6>
                                        <h6>7890 SGD</h6>

                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='card '>
                            <div className='card-body '>
                                <h3>AwS Card</h3>
                                <h4>Memberfive.Budget</h4>
                                <div className='row'>
                                    <div className='col-lg-4'>
                                        <h6>AMOUNT</h6>
                                        <h6>300 SGD</h6>
                                    </div>
                                    <div className='col-lg-4'>
                                        <h6>FREQUENCY</h6>
                                        <h6>monthly</h6>
                                    </div>
                                    <div className='col-lg-4'>
                                        <h6>EXPIRY</h6>
                                        <h6>21 july 2021</h6>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-4'>
                                        <ul>
                                            <li>spent</li>
                                            <li>Balance</li>
                                        </ul>
                                    </div>
                                    <div className='col-lg-4'></div>
                                    <div className='col-lg-4'>
                                        <h6>7890 SGD</h6>
                                        <h6>7890 SGD</h6>

                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='card '>
                            <div className='card-body '>
                                <h3>NetFlix</h3>
                                <h4>Memberfive.Budget</h4>
                                <div className='row'>
                                    <div className='col-lg-4'>
                                        <h6>AMOUNT</h6>
                                        <h6>300 SGD</h6>
                                    </div>
                                    <div className='col-lg-4'>
                                        <h6>FREQUENCY</h6>
                                        <h6>monthly</h6>
                                    </div>
                                    <div className='col-lg-4'>
                                        <h6>EXPIRY</h6>
                                        <h6>21 july 2021</h6>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-4'>
                                        <ul>
                                            <li>spent</li>
                                            <li>Balance</li>
                                        </ul>
                                    </div>
                                    <div className='col-lg-4'></div>
                                    <div className='col-lg-4'>
                                        <h6>7890 SGD</h6>
                                        <h6>7890 SGD</h6>

                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
