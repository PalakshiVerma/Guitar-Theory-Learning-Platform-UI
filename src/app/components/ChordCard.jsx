export function ChordCard({ name, category }) {
  return (
    <div
      className="bg-white border border-gray-200 hover:border-orange-500 rounded-lg p-5 cursor-pointer transition-all hover:shadow-sm"
    >
      <p className="font-semibold text-black">{name}</p>
      <p className="text-gray-500 text-sm mt-1">{category}</p>
    </div>
  );
}
