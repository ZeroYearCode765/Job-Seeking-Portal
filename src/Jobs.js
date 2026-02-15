import jobsData from "../component/dummyData";
import { useDispatch, useSelector } from "react-redux";
import { applyJob } from "./slicer";

export default function Jobs() {
  const dispatch = useDispatch();

  const appliedJobs = useSelector(
    (state) => state.appliedJobs.appliedJobs
  );

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Available Jobs
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {jobsData.map((job) => {

          const isApplied = appliedJobs.some(
            (item) => item.id === job.id
          );

          return (
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

              <button
                onClick={() => dispatch(applyJob(job))}
                disabled={isApplied}
                className={`mt-4 w-full py-2 rounded 
                  ${
                    isApplied
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-600 text-white"
                  }`}
              >
                {isApplied ? "Applied" : "Apply"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
