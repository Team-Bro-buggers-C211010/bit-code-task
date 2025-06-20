const FilterSort = () => {
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
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm hover:cursor-pointer"
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
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm hover:cursor-pointer"
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
                        id="sort"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm hover:cursor-pointer"
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