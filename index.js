(function (window) {
  // All code of my library
  function myLibrary() {
    // My object library
    const _myLibraryObject = {};

    // This variable is only accessible in the context of the library
    const settings = {
      pageSize: 100,
      skip: 0,
      take: 100,
    };

    return _myLibraryObject;
  }

  // My global variable with my code
  if (!window.myWindowGlobalLibraryName) {
    window.myWindowGlobalLibraryName = myLibrary();
  }
})(window);

console.log(myWindowGlobalLibraryName);
