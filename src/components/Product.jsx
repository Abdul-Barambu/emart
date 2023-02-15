import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCart } from './redux/action';
import './loading.css'

const Product = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch()
    const addProduct = product => {
        dispatch(addCart(product))
    }

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            setProduct(await response.json())
            setLoading(false)
        }
        getProduct();
    }, [])

    const Loading = () => {
        return (
            <div>
                 <div class="center-body">
                    <div class="loader-circle-9">Loading
                        <span></span>
                    </div>
                </div>
            </div>
        )
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="row">
                    <div className="col-md-6">
                        <img src={product.image} height='400px' width='400px' />
                    </div>
                    <div className="col-md-6 px-4">
                        <h4 className='text-uppercase text-black-50'>{product.category}</h4>
                        <h4 className='display-5'>{product.title}</h4>
                        <p className="lead">
                            Rating {product.rating && product.rating.rate}
                            <i className="fa fa-star "></i>
                        </p>
                        <h3 className="display-6 fw-bold my-4">₦{product.price}</h3>
                        <p className="lead">{product.description}</p>
                        <button className="btn btn-outline-dark px-4 py-2" onClick={() => addProduct(product)}>Add to Cart</button>
                        <NavLink to='/cart' className="btn btn-dark px-4 py-2 ms-2">Go to Cart</NavLink>
                    </div>
                </div>
            </>

        )
    }
    return (
        <div>
            <div className='container py-5'>
                <div className="row py-4">
                    {
                        loading ? <Loading /> : <ShowProducts />
                    }
                </div>
            </div>
        </div>
    )

}

export default Product
