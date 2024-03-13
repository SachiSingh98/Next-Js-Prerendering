import React from 'react'

export default function DetailPage(props) {

    if(!props.product){
        return <p>
            Loading....
        </p>
    }

  return (
    <>
    <h1>{props.product.title}</h1>
    </>
  )
}


export const getStaticProps = async(context)=>{
    const {params} = context
    const id = params.id

    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    const data = await res.json()

  
    return {
      props:{
        product:data
      }
    }
}


export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
    const data = await res.json()

    if(!data){
        return {notFound:true}
    }
  
    const paths = data.map((product) => ({
      params: { id: `${product.id}` }
    }))
  
    return {
      paths,
      fallback: true
    }
  }
  