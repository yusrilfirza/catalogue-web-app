import Image from 'next/image';
import Link from 'next/link';
import UilShoppingCart from '@iconscout/react-unicons/icons/uil-shopping-cart';
import Button from '../../button';

export default function Header() {
    return (
        <header>
            <Link href="/">
                <Image
                    src="/logo.png"
                    alt="logo"
                    width={36}
                    height={30}
                    priority
                />
            </Link>
            <h2 id="brand-name">CATASTROKE</h2>
            <Button variant="icon" icon={UilShoppingCart} />
        </header>
    )
}