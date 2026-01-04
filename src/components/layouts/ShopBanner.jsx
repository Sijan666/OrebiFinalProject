import Button from "../Button"
import Container from "../Container"
import Flex from "../Flex"
import Images from "../Images"
import shopBannerWatch from '../../assets/shopBannerWatch.png'

const ShopBanner = () => {
    return (
        <div className="pt-8 pb-20 ">
            <Container className={'bg-[#F3F3F3]'}>
                <Flex>
                    <div className="watch w-[40%]">
                        <Images imgSrc={shopBannerWatch}/>
                    </div>
                    <div className="textPart w-[60%]">
                        <h3 className="font-bold text-[39px] text-[#262626]">Phone of the year</h3>
                        <p className="py-10 text-base text-[#262626] lg:w-[511px] w-200px">Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum..</p>
                        <Button btnText={'Shop Now'} className={'py-4 px-14 text-base font-bold'}/>
                    </div>
                </Flex>
            </Container>
        </div>
    )
}

export default ShopBanner