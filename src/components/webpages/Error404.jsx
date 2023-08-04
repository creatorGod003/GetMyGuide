const Error404 = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
          <p className="text-2xl font-medium mb-8">Page Not Found</p>
          <p className="text-gray-500 text-lg mb-4">
            The page you are looking for might have been removed or is
            temporarily unavailable.
          </p>
          <a
            href="/"
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
          >
            Go back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Error404;
