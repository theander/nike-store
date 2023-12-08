import { CartItem } from "./CartItem";
export function Cart({ cartItems,onClickTrash }) {
  return (
    <>
      <h2 className="dark:text-white text-4xl mb-5 font-bold">Cart</h2>
      <ul className="space-y-5">
        {cartItems.map((cartItem) => (
          <li key={cartItem.product.id}>
            <CartItem item={cartItem} onClickTrash={onClickTrash} />
          </li>
        ))}
      </ul>
    </>
  );
}
