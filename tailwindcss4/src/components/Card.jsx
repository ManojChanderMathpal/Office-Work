function Card({ count, total }) {
  return (
    <div className="p-4 border-2 rounded-lg bg-amber-50 text-center">
      {count > 0 ? (
        <p>🛒 Cart: {count} items | Total: ${total}</p>
      ) : (
        <p>🛒 Cart is empty</p>
      )}
    </div>
  );
}

export default Card;
