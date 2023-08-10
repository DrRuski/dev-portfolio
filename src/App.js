import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";

export default function App() {
  return (
    <>
      <div className="min-vh-100">
        <Header />
        <Main />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}
