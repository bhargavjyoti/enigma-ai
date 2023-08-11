import { UserButton } from "@clerk/nextjs"
import MobileSidebar from './mobile-sidebar';

const Navbar = () => {
  return (
    <nav className='flex items-center p-4'>
        {/* Left Side */}
        <MobileSidebar />
        {/* Right Side */}
        <div className='flex justify-end w-full'>
            <UserButton afterSignOutUrl="/" />
        </div>
    </nav>
  )
}

export default Navbar