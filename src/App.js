import "./App.css";
import Counter from "./components/Counter";
import DogImage from "./components/DogImage";
import EventHandling from "./components/EventHandling";
import Footer from "./components/Footer";
import FormComponent from "./components/FormComponent";
import Header from "./components/Header";
import MyComponent from "./components/MyComponent";
import ThemeSwitcher from "./ThemeSwitcher";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div className="">
      <Header />

      <MyComponent />

      <UserProfile />

      <Counter />

      <DogImage />

      <EventHandling />

      <FormComponent />

      <ThemeSwitcher />

      <Footer />
    </div>
  );
}

export default App;
