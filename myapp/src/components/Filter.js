import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


export default function Filter() {
    return (
        <>
    
            <div className="card ms-5 me-5">
           
                <div className="card-header"> Filter
                
                </div>
                <div className="card-body">
                    <div>
                        <h3>Filters</h3>
                        <div className='row'>
                            <h6>Type</h6>
                            <div className='col-lg-6'>


                                <input type='checkbox' name='Subscription'>

                                </input>
                                <h6>Subscrition</h6>

                            </div>
                            <div className='col-lg-6 '>
                                <input type='checkbox' value='Burner'>

                                </input>
                                <h6>Burner</h6>

                            </div>
                        </div>
                        <div className='row'>
                        <h6>Card Holder</h6>
                        <input type='dropdown' placeholder='card holder'/>
                        </div>
                        <div className='row mt-2'>
                            <div className='col-lg-6'>
                                <button className='bg-danger text-white'>Apply</button>
                            </div>
                            <div className='col-lg-6'>
                            <button className='bg-Secondary text-black'>Clear</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}
