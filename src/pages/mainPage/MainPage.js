import { useDispatch, useSelector } from "react-redux"
import { productsSelect } from "../../redux/productsSlice"
import { useEffect } from "react"
import { getProducts } from "../../redux/productsSlice"
import { Link } from "react-router-dom"


export default function MainPage (){
    const dispatch = useDispatch()
    const {products, load} = useSelector(productsSelect)


    useEffect(() => {
       dispatch(getProducts())
    }, [dispatch]);
    return (
        <div>
        <h1>MainPage</h1>
        {
            !load
            ?
            products.slice(0, 20).map(i => (
                <div key={i.id} style={{width: 300, height: 300, marginTop: 70, border: '1px solid black'}}>
                    <Link to={/about/${i.id}}>
                    <img style={{width: 150, height: 150}} src={i?.url} alt=""/>
                    <h2>{i?.title}</h2>
                    </Link>
                </div>
            ))
            :
            <h2>loading....</h2>
        }
        </div>
    )
}