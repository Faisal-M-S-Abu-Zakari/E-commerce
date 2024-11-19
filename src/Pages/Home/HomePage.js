import DiscountSection from "../../components/Home/DiscountSection";
import HomeCategory from "../../components/Home/HomeCategory";
import Slider from "../../components/Home/Slider";
import CardsProductContainer from "../../components/Products/CardsProductContainer";
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
        </div>
    )
}
export default HomePage ;