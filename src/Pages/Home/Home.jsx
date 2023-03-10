import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Cookies from 'js-cookie'
import Ads from "../../Components/Ads/Ads";
import AsideMenu from "../../Components/AsideMenu/AsideMenu";
import FeedBack from "../../Components/FeedBack/FeedBack";
import Footer from "../../Components/Footer/Footer";
import MainTitle from "../../Components/Helpers/MainTitle";
import MainSlider from "../../Components/MainSlider/MainSlider";
import Navbar from "../../Components/Navbar/Navbar";
import Product2TempOne from "../../Components/Product/Product2TempOne";
import Product2 from "../../Components/TempFour/Product2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ProductTwo from "../../Components/Skelaton/ProductTwo";
import TempThreeProdTwo from "../../Components/TempThree/TempThreeProdTwo";
import TempTwoProdTwo from "../../Components/TempTwo/TempTwoProdTwo";
import MenuGallery from "../../Components/MenuGallery/MenuGallery";
import TempThreeProdOneS from "../../Components/Skelaton/TempThree/TempThreeProdOneS";
import TempFive from "../../Components/Skelaton/TempFive";
import ProdFourTwo from "../../Components/Skelaton/TempFour/ProdFourTwo";
import TitleSek from "../../Components/Skelaton/TitleSek";
import ProdTempThree from "../../Components/Skelaton/TempTwo/ProdTempThree";
import Category from "../../Data/Category";
import ContactBtn from "../../Components/ContactBtn/ContactBtn";
const Home = () => {
    let lang = Cookies.get("lang")
    let [active, setActive] = useState(false);
    let [feedActive, setFeedActive] = useState(false);
    const [bestSell, setBestSel] = useState(null);
    const [categ, setCateg] = useState(null);
    const [asidedata, setAsideData] = useState(null);
    const [title1, setTitle1] = useState(null);
    const [title2, setTitle2] = useState(null);
    const [menu, setMenu] = useState(null);
    const [adstrans, setAdsTrans] = useState(null);
    const mainData = useSelector((state) => state.mainData.data);
    const navigate = useNavigate();
    const images = [
        {image: "/images/pic_1.jpeg"},
        {image: "/images/pic_2.jpeg"},
        {image: "/images/pic_3.jpeg"},
        {image: "/images/pic_4.jpeg"},
        {image: "/images/pic_5.jpeg"},
        {image: "/images/pic_6.jpeg"},
        {image: "/images/pic_7.jpeg"},
        {image: "/images/pic_8.jpeg"},
        
    ]
    function activeHandler() {
        setActive(!active);
    }
    function feedActiveHandler(e) {
        if (!feedActive) {
            e.preventDefault();
        }
        setFeedActive(!feedActive);
    }
    

   

    useEffect(() => {
        window.scrollTo(0, 0)
        if (!lang) {
            navigate("/");
            return;
        }
        if (mainData) {
            
            setCateg(mainData.category);
            setTitle1(mainData.mostsale_title)
            setBestSel(mainData.best_sale_dishes);
            setTitle2(lang=="en"?mainData.categories_categoriesEn:mainData.categories_categoriesAr)
            // setAsideData(res.data.data.aside)
            // setMenu(res.data.data.menuimages)
            // setAdsTrans(res.data.data.aside.reanslation.ad)
        }
    }, [mainData, lang]);


    return (
        <>
            <Navbar logo={true} activeHandler={activeHandler} />
            {asidedata?<AsideMenu
                active={active}
                activeHandler={activeHandler}
                feedActiveHandler={feedActiveHandler}
                asidedata={asidedata}
            />:null}
                 
            {images.map((m, i) => <MenuGallery photo={m} key={m.image}/>)}
                

            <FeedBack
                feedActive={feedActive}
                feedActiveHandler={feedActiveHandler}
            />
            <Footer />
            <ContactBtn />
        </>
    );
};

export default Home;
