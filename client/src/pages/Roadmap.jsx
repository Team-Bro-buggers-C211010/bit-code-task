import RoadmapCard from "../components/Roadmap/RoadmapCard";

const Roadmap = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8 text-slate-900">All Roadmaps</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((_, i) => (
          <RoadmapCard key={i} />
        ))}
      </div>
    </div>
  );
};


export default Roadmap