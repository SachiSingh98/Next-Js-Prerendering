import React from 'react'

export default function ProfileWithId(props) {
  return (
    <>
    <h1>
    {props.title.id}
    </h1>
      {props.title.name}
    </>
  )
}

export const getServerSideProps = async(context)=>{

    const {params} = context
    console.log(params.id)

    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
    const data = await res.json()

    const value = data
    return {
        props:{
            title:{id:value.id , name:value.title}
        }
    }
}
