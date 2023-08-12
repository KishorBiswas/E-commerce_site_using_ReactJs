import React, { useState } from 'react';
import css from "./Product.module.css";
import Plane from "../../assets/plane.png";
import { ProductsData } from '../../data/products';
import {useAutoAnimate} from '@formkit/auto-animate/react';


function Product() {
    let [parent] = useAutoAnimate();

    let [menuProduct, setMenuProduct] = useState(ProductsData);

    let filterproduct = (type) => {
        setMenuProduct(ProductsData.filter((product) => product.type === type));
    }

  return (
    <div className={css.container}>
        <img src={Plane} alt='palane_logo' />
        <h1>Our product list here..</h1>

        <div className={css.products}>
            <ul className={css.menu}>
                <li onClick={() => setMenuProduct(ProductsData)}>All</li>
                <li onClick={() => filterproduct("skin care")}>Skin Care</li>
                <li onClick={() => filterproduct("conditioner")}>Conditioner</li>
                <li onClick={() => filterproduct("foundation")}>Foundation</li>
            </ul>

            <div className={css.list} ref={parent}>
                {
                    menuProduct.map((product, i) => (
                        <div className={css.product} key={i} >
                            <div className='left_slide'>
                                <div className='name'>
                                    <span>{product.name}</span>
                                    <span>{product.detail}</span>
                                   
                                </div>
                                <span>{product.price}$</span>
                                <div>Shop now</div>
                            </div>

                            <img src={product.img} alt="product_image" className="img_product"/>

                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Product;