import { useForm } from "react-hook-form";

const CreateRoadmap = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-slate-900">Create a New Roadmap</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 max-w-2xl mx-auto w-full rounded-lg shadow-md border border-amber-300"
      >
        <div className="mb-5">
          <label className="block text-gray-700 font-bold mb-2">Title</label>
          <input
            type="text"
            {...register("title", { required: "Title is required" })}
            placeholder="Enter title"
            className={`w-full px-4 py-2 border ${errors.title ? "border-red-500" : "border-gray-300"} rounded outline-none`}
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
        </div>

        <div className="mb-5">
          <label className=" block text-gray-700 font-bold mb-2">Description</label>
          <textarea
            {...register("description", { required: "Description is required" })}
            placeholder="Enter description"
            rows="4"
            className={`w-full px-4 py-2 border ${errors.description ? "border-red-500" : "border-gray-300"} rounded outline-none resize-none`}
          ></textarea>
          {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
        </div>

        <div className="mb-5">
          <label className=" block text-gray-700 font-bold mb-2">Category</label>
          <select
            {...register("category", { required: "Category is required" })}
            className={`w-full px-4 py-2 border hover:cursor-pointer ${errors.category ? "border-red-500" : "border-gray-300"} rounded outline-none`}
          >
            <option value="">Select a category</option>
            <option value="Feature">Feature</option>
            <option value="Goal">Goal</option>
            <option value="Milestone">Milestone</option>
            <option value="Improvement">Improvement</option>
            <option value="Bug Fix">Bug Fix</option>
          </select>
          {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
        </div>

        <div className="mb-6">
          <label className=" block text-gray-700 font-bold mb-2">Status</label>
          <select
            {...register("status", { required: "Status is required" })}
            className={`w-full px-4 py-2 border hover:cursor-pointer ${errors.status ? "border-red-500" : "border-gray-300"} rounded outline-none`}
          >
            <option value="">Select a status</option>
            <option value="Planned">Planned</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          {errors.status && <p className="text-red-500 text-sm mt-1">{errors.status.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full border bg-amber-400 text-white p-2 rounded hover:bg-white hover:text-amber-400 hover:cursor-pointer hover:border-amber-400 transition-colors duration-300"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateRoadmap;
