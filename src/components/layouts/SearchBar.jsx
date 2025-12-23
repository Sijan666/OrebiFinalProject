
import Container from '../Container'
import Flex from '../Flex'
import { HugeiconsIcon } from '@hugeicons/react'
import { MenuTwoLineIcon } from '@hugeicons/core-free-icons'
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Menu, MenuButton, MenuItems, Popover, PopoverButton, PopoverPanel } from '@headlessui/react';

const SearchBar = () => {
    return (
        <>
        <div className="bg-[#F5F5F3] border border-t-[#979797] border-b-[#979797]">
            <Container className={'py-6'}>
                <Flex className={'justify-between items-center'}>
                    <div className="iconText items-center">
                        
                        {/* <h3 className='pl-3 text-[14px] text-[#262626]'>Shop by Category</h3> */}
                        <Popover className="relative ">
                            <PopoverButton className={'ml-2 outline-none'}>
                                <HugeiconsIcon icon={MenuTwoLineIcon} color='text-[#262626]' strokeWidth={3} className='inline-block mr-3'/> 
                                Shop by Category
                            </PopoverButton>
                            <PopoverPanel anchor="bottom" className="flex flex-col bg-black p-[15px] w-[170px] text-white rounded-[20px]">
                                <Link to={'/shop'} className='mb-2'>
                                    Shop
                                </Link>
                                <Link to={'/about'} className='mb-2'>
                                    About
                                </Link>
                                <Link to={'/contact'} className='mb-2'>
                                    Contact
                                </Link>
                            </PopoverPanel>
                        </Popover>
                    </div>
                    <div className="searchBar">
                        <div className="flex justify-between items-center bg-white border-gray-300 px-5 py-5 w-[600px]">
                            <input type="text" placeholder="Search Products" className="outline-none placeholder:text-gray-400 text-[#C4C4C4] w-[80%]"/>
                            <button className="cursor-pointer"><FaSearch /></button>
                        </div>
                    </div>
                    <div className="icons flex gap-x-2">
                        <Link to={'/login'}>
                            <FaUser />
                        </Link>
                        <Link to={'/'}>
                            <GoTriangleDown />
                        </Link>
                        <Link to={'/'}>
                            <FaShoppingCart />
                        </Link>
                    </div>
                </Flex>
            </Container>
        </div>
        </>
    )
}

export default SearchBar