(function (window) {
  // All code of my library
  function myLibrary() {
    // My object library
    const _myLibraryObject = {};

    return _myLibraryObject;
  }

  // My global variable with my code
  if (!window.myWindowGlobalLibraryName) {
    window.myWindowGlobalLibraryName = myLibrary();
  }
})(window);

console.log(myWindowGlobalLibraryName);
