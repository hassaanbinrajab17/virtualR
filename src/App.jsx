import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import WorkflowSection from "./components/WorkflowSection";
import Pricing from "./components/Pricing";
import Testimonials  from "./components/Testimonials";
import Footer from './components/Footer';

export default function App() {
  return (
    <div>


      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSection />
      <FeatureSection />
      </div>
      <WorkflowSection />
       <Pricing/>
       <Testimonials/> 
       <Footer/> 
    </div>
  );
}

// import React from "react";
// // import Navbar from "./components/Navbar";
// import HeroSection from "./components/HeroSection";
// const App = () => {
//   return (
//     <>
//     <div>Hello World!</div>
//       {/* <Navbar /> */}

//       {/* <div className="max-w-7xl mx-auto pt-20 px-6">
//         hi
//         <HeroSection />
//         <FeatureSection />
//       </div> */}
//     </>
//   );
// };

// export default App;
