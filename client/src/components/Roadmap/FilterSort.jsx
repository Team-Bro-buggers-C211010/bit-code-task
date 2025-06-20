import { useDispatch, useSelector } from "react-redux";
import { setFilterSort } from "../../features/Roadmaps/roadmapSlice";

const FilterSort = () => {
    const { filterSort } = useSelector((state) => state.roadmap);
    const dispatch = useDispatch();
    const handleFilterSort = (e) => {
        dispatch(setFilterSort({
            ...filterSort,
            [e.target.id]: e.target.value
        }));
    }
    return (
        <div className="flex flex-col lg:flex-row lg:items-end gap-4 bg-white p-4 shadow-md rounded-lg mb-6">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">Filter & Sort :</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                        Category
                    </label>
                    <select
                        id="category"
                        value={filterSort.category}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm hover:cursor-pointer"
                        onChange={handleFilterSort}
                    >
                        <option value="">All</option>
                        <option value="Feature">Feature</option>
                        <option value="Goal">Goal</option>
                        <option value="Milestone">Milestone</option>
                        <option value="Improvement">Improvement</option>
                        <option value="Bug Fix">Bug Fix</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                        Status
                    </label>
                    <select
                        id="status"
                        value={filterSort.status}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm hover:cursor-pointer"
                        onChange={handleFilterSort}
                    >
                        <option value="">All</option>
                        <option value="Planned">Planned</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-1">
                        Sort By
                    </label>
                    <select
                        id="sortBy"
                        value={filterSort.sortBy}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm hover:cursor-pointer"
                        onChange={handleFilterSort}
                    >
                        <option value="latest">Latest</option>
                        <option value="popularity">Most Popular</option>
                    </select>
                </div>
            </div>
        </div>

    )
}

export default FilterSort