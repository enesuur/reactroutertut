import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export default function CareerDetails() {
    const {id} = useParams()
    const career = useLoaderData();
    return (
    <div className='career-details'>
        <div className='details'>
            <p>Career details for {career.title}</p>
            <p>Starting Salary: {career.salary}</p>
            <p>Location {career.location}</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, ipsa!
                <br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, doloribus?
            </p>
        </div>

    </div>
  )
}

export const careerDetailsLoader  = async({params}) => {
    const { id } = params
    const res = await fetch('http://localhost:8000/careers/' + id)
    if(!res.ok){
        throw Error('We could not find the career that you are looking for :/')
    }
    return res.json()
}
