function UserProfile() {
    return (
      <div className="bg-gray-100 p-4 sm:p-6 md:p-8 max-w-xs sm:max-w-sm md:max-w-md mx-auto my-10 rounded-lg shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-xl">
        <img 
          src="https://via.placeholder.com/150" 
          alt="User" 
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full mx-auto transition-transform duration-300 ease-in-out hover:scale-110"
        />
        <h1 className="text-lg sm:text-xl md:text-xl text-blue-800 my-4 transition-colors duration-300 ease-in-out hover:text-blue-500">
          John Doe
        </h1>
        <p className="text-sm sm:text-base md:text-base text-gray-600">
          Developer at Example Co. Loves to write code and explore new technologies.
        </p>
      </div>
    );
  }
  
  export default UserProfile;
  