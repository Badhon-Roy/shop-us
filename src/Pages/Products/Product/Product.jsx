
import { AiOutlineRight } from "react-icons/ai"
import { Link } from "react-router-dom";
const Product = ({ product }) => {
    const {_id, category, title, product_image, price, discount_price } = product;
    return (
        <div>
            <div className="card bg-base-100 hover:border-[#ae1c9a] hover:border h-[400px] md:h-[500px] shadow-xl">
                <figure><img className="h-[200px] md:h-[300px] w-full object-cover" src={product_image} alt="Shoes" /></figure>
                <div className="md:card-body p-4">
                    <h2 className="card-title">{title}</h2>
                    <p className="text-xl md:my-0 my-2">Category: {category}</p>
                    <div className="flex gap-4">
                        <del>${price}</del>
                        <p className="text-[#ae1c9a]">${discount_price}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/category/${_id}`}>
                            <button className="bg-[#ae1c9a] hover:bg-[#88277b] py-2 px-5 rounded-md flex items-center gap-2 text-white">See Details <AiOutlineRight className="text-xl font-bold"></AiOutlineRight></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;