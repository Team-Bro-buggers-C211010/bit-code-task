import { useEffect } from "react";
import RoadmapCard from "../components/Roadmap/RoadmapCard";
import { useDispatch, useSelector } from 'react-redux';
import { getAllRoadmaps } from "../features/Roadmaps/roadmapThunk";

const Roadmap = () => {
  const { roadmaps } = useSelector((state) => state.roadmap);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRoadmaps());
  },[dispatch]);
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8 text-slate-900">All Roadmaps</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roadmaps.map((roadmap, i) => (
          <RoadmapCard roadmap={roadmap} key={i} />
        ))}
      </div>
    </div>
  );
};


export default Roadmap