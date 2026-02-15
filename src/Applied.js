import { useSelector, useDispatch } from "react-redux";
import { removeJob } from "./slicer";

export default function Applied() {

  const dispatch = useDispatch();

  // ✅ Get applied jobs from Redux
  const appliedJobs = useSelector(
    (state) => state.appliedJobs.appliedJobs
  );

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Applied Jobs
      </h1>

      {appliedJobs.length === 0 ? (
        <p className="text-center text-gray-500">
          You have not applied to any jobs yet.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {appliedJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white p-6 rounded-lg shadow"
            >
              <h2 className="text-xl font-semibold mb-1">
                {job.title}
              </h2>

              <p className="text-gray-600 font-medium">
                {job.company}
              </p>

              <p className="text-sm text-gray-500 mt-1">
                📍 {job.location}
              </p>

              <button
                onClick={() => dispatch(removeJob(job.id))}
                className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
