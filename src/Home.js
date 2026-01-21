import { Link } from "react-router";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 py-16">
      {/* Main Heading */}
      <h1 className="text-4xl font-bold text-blue-700 mb-4">
        Welcome to CareerConnect
      </h1>

      {/* Subtitle */}
      <p className="text-gray-600 text-lg max-w-2xl mb-10">
        CareerConnect is a simple job portal where you can explore available jobs
        and track the jobs you have applied for — all in one place.
      </p>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
        <Link to="/jobs">
            <div className="p-6 border rounded-lg shadow-sm bg-white">
            <h2 className="text-xl font-semibold mb-2">Browse Jobs</h2>
            <p className="text-gray-600">
                Explore job opportunities based on your skills and interests.
            </p>
            </div>
        </Link>

        <Link to="/applied">
            <div className="p-6 border rounded-lg shadow-sm bg-white">
            <h2 className="text-xl font-semibold mb-2">Track Applications</h2>
            <p className="text-gray-600">
                Easily keep track of all the jobs you have applied for.
            </p>
            </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
