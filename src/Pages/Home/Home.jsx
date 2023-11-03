import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-[1400px] mx-auto px-4 my-16 flex justify-between gap-16">    
                <div className="p-12" style={{ backgroundImage: 'url("https://quomodothemes.website/html/shopus/assets/images/homepage-one/syle-bg-one.webp")',width :'100%' , backgroundRepeat: 'no-repeat' }}>
                    <p className="text-xl">NEW STYLE</p>
                    <h2 className="text-3xl font-bold w-2/4 my-5">Get 65% Offer & Make NewFusion.</h2>
                    <button className="bg-[#ffbb38] py-1 mt-10 px-4 text-[18px] rounded-full">shop now </button>
                </div>
                <div className="p-12" style={{ backgroundImage: 'url("https://quomodothemes.website/html/shopus/assets/images/homepage-one/style-bg-two.webp")',width :'100%' , height:'460px' , backgroundRepeat: 'no-repeat' }}>
                    <p className="text-xl">Mega OFFER</p>
                    <h2 className="text-3xl font-bold w-2/4 my-5">Make your New Styles with Our Products</h2>
                    <button className="bg-[#ffbb38] py-1 mt-10 px-4 text-[18px] rounded-full">shop now </button>
                </div>
            </div>
            <Categories></Categories>

        </div>
    );
};

export default Home;