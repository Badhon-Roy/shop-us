// import { useEffect, useState } from "react";
import Category from "../Category/Category";
import { useQuery } from "@tanstack/react-query";


const Categories = () => {
    // const [categories, setCategories] = useState([])
    // useEffect(() => {
    //     fetch('http://localhost:5000/categories')
    //         .then(res => res.json())
    //         .then(data => setCategories(data))
    // }, [])

    const { data: categories, isLoading, isError, error } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            return res.json()
        },
    })
    if (isLoading) {
        return <div className="flex justify-center items-center h-[20vh]"> <span className="loading loading-spinner loading-lg text-success my-16"></span></div>
    }
    else if (isError) {
        return <p className="text-xl text-red-500 text-center my-16">Something went wrong: {error.message}</p>
    }

    return (
        <div className="max-w-[1400px] mx-auto px-4 my-16">
            <h2 className="text-3xl font-bold my-4 text-center">Our Categories</h2>
            <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 gap-5">
                {
                    categories?.map(category => <Category key={category._id} product={category}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;