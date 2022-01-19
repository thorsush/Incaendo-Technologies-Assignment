import "./App.css";
import HomePage from "./Components/HomePage";
import SubscriberInfo from "./Components/SubscriberInfo";
import BlogListing from "./Components/BlogListing";
import AboutUs from "./Components/AboutUs";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <HomePage />
      <SubscriberInfo />
      <BlogListing />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
