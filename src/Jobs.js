import jobsData from "../component/dummyData";


import jobsData from "../component/dummyData";

export default function Jobs() {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Available Jobs</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {jobsData.map((job) => (
          <div
            key={job.id}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-1">{job.title}</h2>
            <p className="text-gray-600 font-medium">{job.company}</p>

            <p className="text-sm text-gray-500 mt-1">
              📍 {job.location} • {job.type}
            </p>

            <p className="text-sm mt-2">
              <span className="font-semibold">Experience:</span>{" "}
              {job.experience}
            </p>

            <p className="text-sm">
              <span className="font-semibold">Salary:</span> {job.salary}
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {job.skills.map((skill, index) => (
                <span
                  key={index}
                  className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>

            <p className="text-sm text-gray-600 mt-3">
              {job.description}
            </p>

            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
              Apply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
