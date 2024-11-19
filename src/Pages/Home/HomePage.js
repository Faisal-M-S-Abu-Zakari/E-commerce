import BrandFeatures from "../../components/Brand/BrandFeatures";
import DiscountSection from "../../components/Home/DiscountSection";
import HomeCategory from "../../components/Home/HomeCategory";
import Slider from "../../components/Home/Slider";
import CardsProductContainer from "../../components/Products/CardsProductContainer";
import Footer from "../../components/utilites/Footer";
import NavBarLogin from "../../components/utilites/NavBarLogin"


const HomePage = ()=>{
    return(
        <div className="font" style={{minHeight:'670px'}}>
            <NavBarLogin />
            <Slider />
            <HomeCategory />
            <CardsProductContainer btnTitle='المزيد' title='الاكثر مبيعا' />
            <CardsProductContainer btnTitle='المزيد' title='الاكثر تقييما' />
            <DiscountSection />
            <CardsProductContainer btnTitle='المزيد' title="أحدث الازياء" />
            <BrandFeatures  btnTitle='المزيد' title="اشهر الماركات "/>
            <Footer />
        </div>
    )
}
export default HomePage ;