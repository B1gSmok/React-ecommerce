import React, { useState } from "react";

const categoryData = {
  "Electronics": {
    "Mobiles": {
      "Smartphones": ["Android", "iPhone"],
      "Feature Phones": ["Nokia", "Samsung Guru"]
    },
    "Laptops": {
      "Gaming Laptops": ["Alienware", "ROG"],
      "Ultrabooks": ["MacBook", "Dell XPS"]
    }
  },
  "Fashion": {
    "Men": {
      "Shirts": ["Casual", "Formal"],
      "Jeans": ["Slim Fit", "Regular"]
    },
    "Women": {
      "Dresses": ["Evening", "Party"],
      "Heels": ["Block", "Stiletto"]
    }
  },

  "Home & Kitchen": {
    "Furniture": ["Sofas", "Tables"],
    "Decor": ["Paintings", "Lamps"]
  }
};

const CategoryDropdownModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPath, setSelectedPath] = useState([]);

  const getCurrentOptions = (data, path) => {
    let current = data;
    for (const key of path) {
      current = current[key];
    }
    return current;
  };

  const handleSelect = (levelIndex, key) => {
    const newPath = selectedPath.slice(0, levelIndex);
    newPath.push(key);
    setSelectedPath(newPath);
  };
  const renderLevels = () => {
    const levels = [];
    let currentData = categoryData;

    for (let level = 0; ; level++) {
      if (currentData === undefined) break;

      if (typeof currentData !== "object" || currentData === null) break;

      // if it's an array, show list and stop further
      if (Array.isArray(currentData)) {
        levels.push(
          <div className="w-1/3" key={level}>
            <ul className="border rounded-md overflow-hidden bg-gray-50">
              {currentData.map((item) => (
                <li
                  key={item}
                  onClick={() => handleSelect(level, item)}
                  className={`px-4 py-2 cursor-pointer hover:bg-blue-100 transition ${selectedPath[level] === item ? "bg-violet-500 font-semibold" : ""
                    }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        );
        break;
      }

      const keys = Object.keys(currentData);
      levels.push(
        <div className="w-1/3" key={level}>
          <ul className="border rounded-md overflow-hidden bg-gray-50">
            {keys.map((key) => (
              <li
                key={key}
                onClick={() => handleSelect(level, key)}
                className={`px-4 py-2 cursor-pointer hover:bg-violet-300 transition ${selectedPath[level] === key ? "bg-violet-500 font-semibold" : ""
                  }`}
              >
                {key}
              </li>
            ))}
          </ul>
        </div>
      );

      const selectedKey = selectedPath[level];
      if (!selectedKey) break;

      currentData = currentData[selectedKey];
    }

    return levels;
  };

  const selectedItem = selectedPath.length >= 2 ? selectedPath[selectedPath.length - 1] : null;


  return (
   
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        {/* <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Shop by Category
        </button>
        {isOpen && ( */}
          <div className="fixed inset-0  z-50 flex justify-center items-center">
            <div className="bg-white rounded-xl p-6 shadow-2xl w-[90%] max-w-4xl relative">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Select Category</h2>

              <div className="space-y-4">
                <div className="flex space-x-4">{renderLevels()}</div>

                {selectedItem && (
                  <div className="text-center">
                    <button
                      onClick={() => alert("Search: " + selectedItem)}
                      className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
                    >
                      GO to  {selectedItem}
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={() => {
                  setIsOpen(false);
                  setSelectedPath([]);
                }}
                className="absolute top-2 right-3 text-gray-400 hover:text-red-500 text-2xl font-bold"
              >
                ×
              </button>
            </div>
          </div>
        {/* )} */}
      </div>

  );
};

export default CategoryDropdownModal;
