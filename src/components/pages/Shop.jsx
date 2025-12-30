import React, { useEffect, useRef, useState } from 'react';
import mixitup from 'mixitup'; // Mixitup import
import Container from '../Container'
import { FaArrowRight } from "react-icons/fa";
import Flex from '../Flex';
import { IoGrid } from "react-icons/io5";
import { CiGrid2H } from "react-icons/ci";

// import best3 from '../../assets/best3.png'
// import so3 from '../../assets/so3.png'
// import so2 from '../../assets/so2.png'

import Product from '../Product';
import axios from 'axios';

const Shop = () => {
    const containerRef = useRef(null);
    let [allData, setAllData] = useState([]);

    useEffect(() => {
        async function alldatas() {
        let data = await axios.get("https://dummyjson.com/products");
        setAllData(data.data.products);
        }
        alldatas();
    });

    useEffect(() => {
        if (containerRef.current && allData.length > 0) {
            mixitup(containerRef.current, {
                animation: {
                    duration: 400,
                }
            });
        }
    },);

    return (
        <>
        <Container className={'py-[125px]'}>
            <h3 className="text-[39px] text-[#262626] font-bold block pb-5">Products</h3>
            <Flex className={'text-[12px] text-[#767676] gap-x-2'}>
                <p>Home</p>
                <FaArrowRight />
                <p>Products</p>
            </Flex>
        </Container>
        <Container>
            <Flex className={'justify-between items-start gap-x-4'}>
                <div className="sideBar w-[30%] pb-[30px]">
                    <div className="category">
                        <h4 className='text-[#262626] font-bold text-[20px] pb-[30px]'>Shop By Category</h4>
                        <p data-filter="all" className='text-[#767676] text-base border-b border-[#F0F0F0] pb-[22px] my-[30px] cursor-pointer hover:font-bold hover:text-black'>All Products</p>
                        <p data-filter=".catOne" className='text-[#767676] text-base border-b border-[#F0F0F0] pb-[22px] my-[30px] cursor-pointer hover:font-bold hover:text-black'>Category 1</p>
                        <p data-filter=".catTwo" className='text-[#767676] text-base border-b border-[#F0F0F0] pb-[22px] my-[30px] cursor-pointer hover:font-bold hover:text-black'>Category 2</p>
                        <p data-filter=".catThree" className='text-[#767676] text-base border-b border-[#F0F0F0] pb-[22px] my-[30px] cursor-pointer hover:font-bold hover:text-black'>Category 3</p>
                        <p data-filter=".catFour" className='text-[#767676] text-base border-b border-[#F0F0F0] pb-[22px] my-[30px] cursor-pointer hover:font-bold hover:text-black'>Category 4</p>
                        <p data-filter=".catFive" className='text-[#767676] text-base border-b border-[#F0F0F0] pb-[22px] my-[30px] cursor-pointer hover:font-bold hover:text-black'>Category 5</p>
                    </div>
                </div>
                <div className="w-[70%]">
                    <div className="firstLine flex gap-x-2 pb-[50px]">
                        <IoGrid />
                        <CiGrid2H />
                    </div>
                    {/* <div className=""> */}
                        {/* Ref ekhane add kora hoyeche jate mixitup ei container ke chinte pare */}
                        <div className="pt-8 pb-20 w-full" ref={containerRef}>
                            <Flex className={'flex-wrap gap-x-4 gap-y-10'}>
                                {allData.map((item)=>(
                                <div className="mix all w-[32%]">
                                    <Product
                                    productImg={item.thumbnail}
                                    badgeText={item.stock}
                                    productTitle={item.title}
                                    productPrice={item.price}
                                    />
                                </div>
                                ))} 
                                {allData.slice(10,15).map((item)=>(
                                <div className="mix catOne w-[32%]">
                                    <Product
                                    productImg={item.thumbnail}
                                    badgeText={item.stock}
                                    productTitle={item.title}
                                    productPrice={item.price}
                                    />
                                </div>
                                ))}
                                {allData.slice(16,22).map((item)=>(
                                <div className="mix catTwo w-[32%]">
                                    <Product
                                    productImg={item.thumbnail}
                                    badgeText={item.stock}
                                    productTitle={item.title}
                                    productPrice={item.price}
                                    />
                                </div>
                                ))}
                            </Flex>
                        </div>
                    {/* </div> */}
                </div>
            </Flex>
        </Container>
        </>
    )
}

export default Shop