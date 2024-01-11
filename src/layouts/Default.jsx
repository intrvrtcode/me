import Header from "../components/layouts/header/Index";
import Main from "../components/layouts/main/Index";
import Footer from "../components/layouts/footer/Index";
import FloatingButton from "../components/layouts/floatbtn/Index";
import ShapeLeft from "../components/layouts/shape/Left";
import ShapeRight from "../components/layouts/shape/Right";

const Default = () => {

  return (
    <div className="bg-background min-h-dvh relative overflow-clip">
      <FloatingButton />

      <ShapeLeft />
      <ShapeRight />

      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default Default;