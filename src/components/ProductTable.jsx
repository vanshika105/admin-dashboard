import React from 'react'; 

const ProductTable = ({ products }) => {
  return (
    <table className="min-w-full rounded-lg overflow-hidden mt-5">
      <thead className='border-b-2 border-gray-100 text-13 text-gray-400 mb-4'>
        <tr>
          <th className="w-6/9 py-2 text-left font-medium">Product Name</th>
          <th className="w-1/9 py-2 font-medium">Stock</th>
          <th className="w-1/9 py-2 font-medium">Price</th>
          <th className="w-1/9 py-2 font-medium">Total Sales</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index} className="text-center text-xs">
            <td className="w-6/9 pt-4">
              <div className="flex items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-14 h-10 object-cover rounded-md mr-5"
                />
                <div>
                  <p className="text-left font-semibold text-base">{product.name}</p>
                  <p className="text-left text-gray-400 text-11">{product.description}</p>
                </div>
              </div>
            </td>
            <td className="w-1/9 pt-4">{product.stock} in stock</td>
            <td className="w-1/9 text-sm font-semibold pt-4">$ {product.price}</td>
            <td className="w-1/9 pt-4">{product.totalSales}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
