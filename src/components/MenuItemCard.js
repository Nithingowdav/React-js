const MenuItemCard = ({
    item,
    onAdd,
    onRemove,
    showAddButton = false,
    showRemoveButton = false,
  }) => {
    const imageUrl = item.imageId
      ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_200/${item.imageId}`
      : null;
  
    return (
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 flex flex-col">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={item.name}
            className="w-full h-40 object-cover rounded-t-xl"
          />
        )}
        <div className="p-4 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
            <p className="text-sm text-gray-600 mt-1 min-h-[40px]">
              {item.description || "No description available"}
            </p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <span className="font-bold text-gray-900">
              ₹{(item.price ?? item.defaultPrice ?? 0) / 100}
            </span>
            {item.ratings?.aggregatedRating?.rating && (
              <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                ⭐ {item.ratings.aggregatedRating.rating}
              </span>
            )}
            {showAddButton && (
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-full font-semibold"
                onClick={onAdd}
              >
                Add
              </button>
            )}
            {showRemoveButton && (
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-full font-semibold"
                onClick={onRemove}
              >
                Remove
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default MenuItemCard;
  