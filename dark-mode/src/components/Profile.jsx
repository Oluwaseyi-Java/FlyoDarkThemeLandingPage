import React from 'react'
import { APIData } from '../APIDATA'
import {FaQuoteLeft} from "react-icons/fa"

const Profile = () => {


    return (
        <section className='Profile'>
            <FaQuoteLeft className='quote'/>
            <div className='items'>
                {APIData.profile.map((item, index) => {
                    return (
                        <div className='item' key={index}>
                            <p className='content'>{item.content}</p>
                            <div className='profile'>
                                <img src={require("../images/" + item.img + ".jpg")} alt={item} />
                                <div className='about'>
                                    <h4>{item.name}</h4>
                                    <p>{item.position}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Profile