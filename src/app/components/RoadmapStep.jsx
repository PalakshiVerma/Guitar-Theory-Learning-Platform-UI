export function RoadmapStep({ number, title, isLast }) {
  return (
    <div className="flex items-center">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center w-12 h-12 bg-orange-500 text-white rounded-full font-semibold">
          {number}
        </div>
        <p className="mt-3 font-semibold text-black">{title}</p>
      </div>
      {!isLast && (
        <div className="w-24 h-0.5 bg-gray-300 mb-8 mx-4" />
      )}
    </div>
  );
}
