import Nav from "./components/Nav";
import Faq from "./containers/faq";
import Features from "./containers/features";
import HowToUse from "./containers/howToUse";
import Showcase from "./containers/showcase";
import Testimonials from "./containers/testimonials";

export default function Home() {
  return (
    <>
      <Nav />
      <Showcase />
      <Features />
      <HowToUse />
      <Testimonials />
      <Faq />
      {/* newsletter */}
    </>
  );
}
