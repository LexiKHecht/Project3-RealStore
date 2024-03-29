import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import ThoughtForm from "../../components/ThoughtForm";

function ProductItem(item) {
 const [state, dispatch] = useStoreContext();

  const {
    imageURL,
    name,
    _id,
    price,
    // quantity -can't get this working :(
  } = item;

  const { cart } = state;


  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }


  return (
    <div className="m-2">
      <div className="flex max-h-screen max-w-screen items-center justify-center bg-gray-100 dark:bg-darkGray">
        <div className="flex font-sans">
          <div className="flex-none lg:w-48 md:w-40 sm:w-36 w-28 relative">
              <img
                className="absolute inset-0 w-full h-full object-scale-down"
                loading="lazy"
                alt={name}
                src={imageURL}
              />
          </div>
          <form className="flex-auto p-6">
            <div className="flex flex-wrap">
              <h1 className="flex-auto text-xl font-semibold text-gray-900 dark:text-offWhite">
                {name}
              </h1>
              <div className="text-lg font-semibold text-black-500 dark:text-offWhite">
                ${price}
              </div>
              <div className="w-full flex-none text-sm font-medium text-black-700 mt-2 dark:text-offWhite">
                In stock
              </div>
            </div>
            <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200 dark:border-palePurple">
              <div className="space-x-2 flex text-sm">
                <label>
                  <input
                    className="sr-only peer"
                    name="size"
                    type="radio"
                    value="xs"
                  />
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-palePurple peer-checked:text-white dark:text-offWhite">
                    XS
                  </div>
                </label>
                <label>
                  <input
                    className="sr-only peer"
                    name="size"
                    type="radio"
                    value="s"
                  />
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-palePurple peer-checked:text-white dark:text-offWhite">
                    S
                  </div>
                </label>
                <label>
                  <input
                    className="sr-only peer"
                    name="size"
                    type="radio"
                    value="m"
                  />
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-palePurple peer-checked:text-white dark:text-offWhite">
                    M
                  </div>
                </label>
                <label>
                  <input
                    className="sr-only peer"
                    name="size"
                    type="radio"
                    value="l"
                  />
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-palePurple peer-checked:text-white dark:text-offWhite">
                    L
                  </div>
                </label>
                <label>
                  <input
                    className="sr-only peer"
                    name="size"
                    type="radio"
                    value="xl"
                  />
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-palePurple peer-checked:text-white dark:text-offWhite">
                    XL
                  </div>
                </label>
              </div>
            </div>
            <div className="flex space-x-4 mb-6 text-sm font-medium">
              <div className="flex-auto flex space-x-4">
                <button
                  onClick={addToCart}
                  className="h-10 px-6 font-semibold rounded-md border border-balck-800 text-gray-900 dark:text-offWhite"
                  type="button"
                >
                  Add to cart
                </button>
              </div>
              <button
                className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200"
                type="button"
                aria-label="Favorites"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  />
                </svg>
              </button>
            </div>
            <p className="text-sm text-slate-700 dark:text-offWhite">Free shipping</p>
          </form>
        </div>
      </div>
      <div
        className="col-12 col-md-10 mb-3 p-3 rounded-b-lg bg-gray-100"
        style={{ border: "3px solid #bbafdb " }}
      >
        <ThoughtForm 
          product={item}
        />
      </div>
    </div>
  );
}

export default ProductItem;
