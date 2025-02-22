import HeaderSection from "../modules/Header.module";
import ServiceSection from "../modules/Service.module";
import ProductsSection from "../modules/Products.module";
import ExtraInfoSection from "../modules/ExtraInfo.module";
import FAQdisplay from "../modules/FAQ.module";
import HelpSection from "../modules/Help.module";
import KeepInTouchSection from "../modules/KeepInTouch.module";
import BottomNav from "../components/bottomNav";
import Meta from "../components/meta";

function LandingPage() {
  return (
    <>
      <Meta
        title={"My Company"}
        description={
          "My company, your one stop solution to all development, technological problems!"
        }
      />
      <HeaderSection />
      <ServiceSection />
      <ProductsSection />
      <ExtraInfoSection />
      <FAQdisplay />
      <HelpSection />
      <KeepInTouchSection />
      <BottomNav />
    </>
  );
}

export default LandingPage;
