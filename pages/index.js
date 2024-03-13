import Link from "next/link";

function HomePage(props) {
const {product}  = props

  return (
    <ul>
      {product?.map((data)=>{
        return <li key={data.id} > <Link href={`/${data.id}`} > {data.title} </Link> </li>
      })}
    </ul>
  );
}

export const getStaticProps = async ()=>{
  console.log("Revalidateing....")
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await res.json()
  // console.log(data)

  if(!data){
    return {
      redirect:{
        destination:'/about'
      }
    }
  }

  if(data.length === 0){
    return { notFound :true}
  }

  return {
    props:{
      product:data
    },
    revalidate:10
  }
}

export default HomePage;
