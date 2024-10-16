export const Product = ({ product }) => {
  const { title, image, description } = product;
  return (
    <div className="border rounded-lg shadow-md p-4 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-contain mb-4"
      />
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};
