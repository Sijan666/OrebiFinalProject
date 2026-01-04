import { Link } from 'react-router-dom'
import sh1 from '../../assets/sh1.png'
import sh2 from '../../assets/sh2.png'
import sh3 from '../../assets/sh3.png'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'


const Ads = () => {
    return (
        <div className="py-[135px]">
            <Container>
                <Flex className="flex-wrap lg:flex-nowrap lg:justify-between lg:gap-x-8 gap-y-4">
                    <div className="lg:leftSide lg:w-1/2 relative">
                        <Link to={'/shop'}>
                        <Images imgSrc={sh1} />
                        </Link>
                    </div>
                    <div className="lg:rightSide lg:w-1/2 relative">
                        <div className="lg:pb-8">
                            <Link to={'/shop'}>
                            <Images imgSrc={sh2} />
                            </Link>
                        </div>
                        <div className='mt-4 lg:mt-0'>
                            <Link to={'/shop'}>
                            <Images imgSrc={sh3} />
                            </Link>
                        </div>
                    </div>
                </Flex>
            </Container>
        </div>
    )
}

export default Ads