import React from 'react'
import Link from 'next/link'

export default function Profile(props) {
  return (
    <>
    {props.userName.map((data)=>{
      return <ul key={data.id} >
        <li><Link href={`/profile/${data.id}`} >{data.title}</Link></li>
      </ul>
    })}
      {/* {props.userName} */}
    </>
  )
}


export const getServerSideProps = async(context)=>{
  
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
  const data = await res.json()

  const value = data

    return {
        props:{
          userName:value
        }
    }
}