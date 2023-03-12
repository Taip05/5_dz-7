import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getProduct } from "../redux/aboutSlice"

export default function AboutPage() {
    const dispatch = useDispatch()
    const {product, load} = useSelector(state => state.productSelect)
    const {id} = useParams()

    useEffect(() => {
        dispatch(getProduct(id))
        console.log(id);
    }, [dispatch])
    return(
        <div>
            {
                !load
                ?
                <div>
                     <img src={product.url} alt=""/>
                    <h2>{product.title}</h2>
                </div>
                :
                <div>loading...</div>
            }
        </div>
    )
}