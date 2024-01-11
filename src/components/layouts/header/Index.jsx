import Brand from "./Brand";
import Navbar from "./Navbar";
import DrawerNav from "./DrawerNav";

const Header = () => {

  return (
    <header className="fixed w-full z-40 bg-background">
      <div className="flex justify-between container mx-auto py-6 px-4 sm:px-14">
        <Brand />
        <Navbar />
        <DrawerNav />
      </div>
    </header>
  )
}

export default Header;