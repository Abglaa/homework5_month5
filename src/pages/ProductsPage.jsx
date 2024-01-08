import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addProduct, fetchProducts } from "../redux/productsSlice"

export default function ProductsPage() {

  const disptach = useDispatch()
  const {products} = useSelector(state => state.productsReducer)
  console.log(products);


  useEffect(()=> {
    disptach(fetchProducts())
  }, [])
    
  return (
    <div>
      <h1>Store</h1>
      {products?.products?.map(item => (
        <div key={item.id}>
          <img src={item.images[0]} alt="image" />
          <p>{item.brand}</p>
          <p>{item.price}</p>
          <button onClick={()=>{disptach(addProduct())}}>Купить</button>
        </div>
      ))}
    </div>
  )
}
