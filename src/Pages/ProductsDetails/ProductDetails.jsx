import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ProductDetails = () => {
    const [item, setItem] = useState([])
    const { id } = useParams()
    const { category, title, product_image, price, discount_price, rating } = item;
    useEffect(() => {
        fetch(`http://localhost:5000/category/${id}`)
            .then(res => res.json())
            .then(data => {
                setItem(data)
            })
    }, [id])

    return (
        <div className="max-w-[1400px] mx-auto px-4 my-16">
            <div className="md:flex justify-between items-center gap-10">
                <div className="md:w-2/4">
                    <img src={product_image} alt="" />
                </div>
                <div className="md:w-2/4 md:mt-0 mt-5 md:border-none border-t-4 border-indigo-500 pt-3 space-y-5 md:text-xl text-[18px]">
                    <h2 className="md:text-3xl text-2xl font-bold">{title} </h2>
                    <p className="md:text-2xl text-xl font-bold">Category : {category}</p>
                    <p>Raging : {rating}</p>
                    <div className="flex gap-4">
                        <del>${price}</del>
                        <p className="text-[#ae1c9a]">${discount_price}</p>
                    </div>
                    <div>
                        <button className="bg-[#ae1c9a] hover:bg-[#96ae1c] py-2 px-5 rounded text-white font-bold mr-4">Add to Cart</button>
                        <button className="bg-[#ae1c9a] hover:bg-[#1cabae] py-2 px-5 rounded text-white font-bold mr-4">Buy now</button>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default ProductDetails;