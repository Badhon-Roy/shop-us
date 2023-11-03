import { useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product/Product";
import { useQuery } from "@tanstack/react-query";

const Products = () => {
    // const [products, setProducts] = useState([]);
    const { category } = useParams();
    const [sortedProducts, setSortedProducts] = useState([]);
    const [sortOrder, setSortOrder] = useState();
    const [isSort, setIsSort] = useState(false)

    // useEffect(() => {
    //     fetch(`http://localhost:5000/products/${category}`)
    //         .then((res) => res.json())
    //         .then((data) => setProducts(data))
    // }, [category]);

    const { data: products , isLoading  } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products/${category}`)
            return res.json();
        }
    })
    if(isLoading){
        return <div className="flex justify-center items-center h-[20vh]"> <span className="loading loading-spinner loading-lg text-success my-16"></span></div>
    }


    const handleSortProduct = (e) => {
        const selectedSortOrder = e.target.value;
        if (selectedSortOrder === 'lowToHigh') {
            const sorted = [...products].sort((a, b) => a.discount_price - b.discount_price);
            setSortedProducts(sorted);
            setSortOrder(selectedSortOrder);
            setIsSort(true)
        } else if (selectedSortOrder === 'highToLow') {
            const sorted = [...products].sort((a, b) => b.discount_price - a.discount_price);
            setSortedProducts(sorted);
            setSortOrder(selectedSortOrder);
            setIsSort(true)
        }

    };



    return (
        <div className="max-w-[1400px] mx-auto px-4 my-16">
            {
                products?.length > 0 && <div className="bg-[#ae1c9a] py-3 rounded-md flex justify-around items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-white">{category}</h2>
                    </div>
                    <div className="">
                        <label>
                            <span className="text-white">Sort by Price: </span>
                            <select className="ml-4 rounded " value={sortOrder} onChange={handleSortProduct}>
                                <option value=""></option>
                                <option value="lowToHigh">Low to High</option>
                                <option value="highToLow">High to Low</option>
                            </select>
                        </label>
                    </div>
                </div>
            }
            {
                products?.length > 0 ? (
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 my-16">
                        {isSort ? (
                            sortedProducts?.map((product) => (
                                <Product key={product._id} product={product} />
                            ))
                        ) : (
                            products?.map((product) => (
                                <Product key={product._id} product={product} />
                            ))
                        )}
                    </div>
                ) : (
                    <h2 className="text-4xl font-bold my-32 text-center">
                        There are currently no products
                    </h2>
                )
            }

        </div>
    );
};

export default Products;
