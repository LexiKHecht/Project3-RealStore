import ProductList from "../components/ProductList";
// import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";




const Home = () => {



  return (
    <div className="max-w-screen bg-tansparent dark:bg-offBlack">
      <Cart/>
      <ProductList />

      
    </div>
  );
};

export default Home;
