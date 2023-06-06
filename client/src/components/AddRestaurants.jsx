import React, { useContext, useState } from 'react'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantsContext } from '../context/RestaurantsContext'

const AddRestaurants = () => {
    const {addRestaurants} = useContext(RestaurantsContext)
    const [name,setName] = useState("")
    const [location,setLocation] = useState("")
    const [priceRange, setPriceRange] = useState("Price Range")

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const response = await RestaurantFinder.post("/",{
                name,
                location,
                price_range : priceRange, 
            })
            // console.log(response);
            addRestaurants(response.data.data.restaurants)
            // console.log(response)
        }catch(err){
            console.log(err)
        }
    }
    return (
        <div>
            <div className='mb-4 '>
                <form action=''>
                    <div className="form row">
                        <div className="col">
                            <input type='text' className='form-control' placeholder='name' value={name} onChange={e=>setName(e.target.value)}/>
                        </div>
                        <div className="col">
                            <input className='form-control' placeholder='location' value={location} onChange={e => setLocation(e.target.value)}/>
                        </div>
                        <div className='col'>
                            <select className='custom-select mr-sm-2 form-control' value={priceRange} onChange={e=>setPriceRange(e.target.value)}>
                                <option disabled> price range</option>
                                <option value={1}>$</option>
                                <option value={2}>$$</option>
                                <option value={3}>$$$</option>
                                <option value={4}>$$$$</option>
                                <option value={5}>$$$$$</option>

                            </select>
                        </div>
                        <div className="col">

                            <button onClick={handleSubmit} className='btn btn-primary form-control'>Add</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddRestaurants
