import React, { useEffect, useState } from 'react'

export default function Sales(props) {
    const [loading , setLoading] = useState(false)
    const [data , setData ] = useState(props.info)
    useEffect(()=>{
        const getSales = async()=>{
            try {
                setLoading(true)
                const res = await fetch('https://dummyproject-41be1-default-rtdb.firebaseio.com/sales.json')
                const data = await res.json()
                
                if(data){
                    const dataArr = []
                    for(const key in data){
                        dataArr.push({id:key , name:data[key].name , age:data[key].age})
                    }
                    setData(dataArr)
                }
                setLoading(false)
                
            } catch (error) {
                setLoading(false)
                console.log(error)
            }
        }
        getSales()
    },[])


    if(loading){
        return <p>Loading...</p>
    }
  return (
    <>
    {data && data.map((info , index)=>{
        return <ul key={index} >
            <li>{info.name}</li>
        </ul>
    })}
    </>
  )
}


export const getStaticProps = async(context)=>{

    const res = await fetch('https://dummyproject-41be1-default-rtdb.firebaseio.com/sales.json')
    const data = await res.json()
    
    const dataArr = []
    if(data){
        for(const key in data){
            dataArr.push({id:key , name:data[key].name , age:data[key].age})
        }
    }

    let info = dataArr

    return {
        props:{
            data:info
        }
    }
}