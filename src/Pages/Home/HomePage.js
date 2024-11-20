import BrandFeatures from "../../components/Brand/BrandFeatures";
import DiscountSection from "../../components/Home/DiscountSection";
import HomeCategory from "../../components/Home/HomeCategory";
import Slider from "../../components/Home/Slider";
import CardsProductContainer from "../../components/Products/CardsProductContainer";




const HomePage = ()=>{
    return(
        <div className="font" style={{minHeight:'670px'}}>
            <Slider />
            <HomeCategory />
            <CardsProductContainer btnTitle='المزيد' title='الاكثر مبيعا' pathText={'/ShowProduct'} />
            <CardsProductContainer btnTitle='المزيد' title='الاكثر تقييما' />
            <DiscountSection />
            <CardsProductContainer btnTitle='المزيد' title="أحدث الازياء"  pathText={'/ShowProduct'} />
            <BrandFeatures  btnTitle='المزيد' title="اشهر الماركات "/>

        </div>
    )
}
export default HomePage ;