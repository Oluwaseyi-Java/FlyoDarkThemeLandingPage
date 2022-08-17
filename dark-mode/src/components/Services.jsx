import React from 'react'
import { APIData } from "../APIDATA"


const Services = () => {

    
    return (
        <section className='Services'>
        
            <div className='items'> 
                {APIData.services.map((item,index) => {
                    return (
                        <div className='item' key={index}>
                            <img src={require("../images/"+item.img+".svg")} alt={item.img} />
                            <h3>{ item.title}</h3>
                            <p>{ item.content}</p>
                        </div>
                )
            })}
            </div>
        
        </section>
  )
}

export default Services