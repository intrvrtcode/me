import { Outlet } from "react-router-dom";

const Main = () => {

  return (
    <main>
      <div className="container mx-auto py-6 px-4 sm:px-14">
        <Outlet />
      </div>
    </main>
  )
}

export default Main;