import React from 'react';

// test ここから、 使い回し出来るようにする
function Container() {
  return (
    <div className="bg-blue-50 p-6">
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src="/test.png" alt="Image" className="w-full h-40"></img>
    <div className="p-6">
      <span className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block">人材採用</span>
      <p className="mt-4 text-gray-700">
        セロはこどものおみかい下らを楽屋がし次たん。
      </p>
      <p className="mt-2 text-blue-500">
        2024.03.05
      </p>
    </div>
  </div>
</div>
  );
}
export default Container;

//