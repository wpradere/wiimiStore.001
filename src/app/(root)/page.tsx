import Image from "next/image";
import {titleFonts} from "@/app/config/fonts";
import CarrucelComponent from "@/components/carousel-text-banner";
import FeatureProductsComponent from "@/components/feature-products";
import ChooseCategory from "@/components/choose-category";
import CentralBanner from "@/components/central-banner";
import SnowBanner from "@/components/ui/SnowBanner";
import WhatsappFloating from "@/components/ui/WhatsappFloating";

export default function Home() {
  return (
    <div>
        <CarrucelComponent/>
        {/* <SnowBanner/>*/}
        <FeatureProductsComponent/>
        <WhatsappFloating/>
        {/* <CentralBanner/>*/}
        <ChooseCategory/>
    </div>
  );
}
