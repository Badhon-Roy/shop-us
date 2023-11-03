import { Link } from "react-router-dom";


const Category = ({ product }) => {
    const { image, category } = product;
    return (
        <Link to={`products/${category}`}>
            <div className="border-2 w-auto h-[180px] border-[#fde1f8] hover:border-[#ffb6f3] shadow-lg rounded-2xl  flex-col flex justify-center items-center p-6 bg-[#f3e7f1]">
                <img className="" src={image} alt="" />
                <h2 className="text-xl font-bold mt-4">{category}</h2>
            </div>
        </Link>
    );
};

export default Category;