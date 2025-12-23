import Container from "../Container";
import Flex from "../Flex";

// import best1 from "../../assets/best1.png";
// import best2 from "../../assets/best2.png";
// import best3 from "../../assets/best3.png";
// import best4 from "../../assets/best4.png";

import Product from "../Product";
import { useEffect, useState } from "react";
import axios from "axios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";

const Bestseller = () => {
    let [allData, setAllData] = useState([]);
    useEffect(() => {
        async function alldatas() {
        let data = await axios.get("https://dummyjson.com/products");
        setAllData(data.data.products);
        }
        alldatas();
    });
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay : true,
        autoSpeed : 1500,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    return (
        <div className="pt-8 pb-20">
            <Container>
                <h3 className="text-[39px] text-[#262626] font-bold block pb-[30px]">Our Bestsellers</h3>
                    <Slider {...settings}>
                        {allData.map((item)=>(
                        <div className="w-1/4">
                            <Product
                            productImg={item.thumbnail}
                            badgeText={item.stock}
                            productTitle={item.title}
                            productPrice={item.price}
                            />
                        </div>
                        ))} 
                    </Slider>
            </Container>
        </div>
    );
};

export default Bestseller;
