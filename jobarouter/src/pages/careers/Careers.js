import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
// Taking loaded data that we passed as prop.
export default function Careers() {
    const careers = useLoaderData()

    return (
    <div className='careers'>
      { 
      careers.map( career => (
        <Link to={career.id.toString()} key={career.title}>
            <p>{career.title}</p>
            <p>{career.location}</p>
        </Link>
      ))}
    </div>
  )
}

// loader function
export const  careerLoader = async () => {
    const res = await fetch('http://localhost:8000/careers')
    if(!res.ok){
      throw Error('Sorry,We could not fetch the data :( ')
    }

    return res.json()
}