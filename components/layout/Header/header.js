import Image from 'next/image'
import HeaderItem from './headerItem'

import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from '@heroicons/react/outline'
 
const Header = () => {
    return (
        <header className="flex flex-col sm:flex-row sm:items-center justify-between mx-10 sm:mx-5 my-3 h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title="Home" Icon={HomeIcon}/>
                <HeaderItem title="Trending" Icon={LightningBoltIcon}/>
                <HeaderItem title="Verified" Icon={BadgeCheckIcon}/>
                <HeaderItem title="Collection" Icon={CollectionIcon}/>
                <HeaderItem title="Search" Icon={SearchIcon}/>
                <HeaderItem title="User" Icon={UserIcon}/>
            </div>
            <Image
                className="object-contain"
                src="https://links.papareact.com/ua6"
                width={200}
                height={80}/>
        </header>
    )
}

export default Header
