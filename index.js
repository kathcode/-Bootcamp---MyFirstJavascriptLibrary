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

    // Change a private property of the library
    _myLibraryObject.setPageSize = function (pageSize) {
      if (typeof pageSize === 'number') {
        settings.pageSize = pageSize;
      } else {
        console.log('You should send a number to change the page size');
      }

      return pageSize;
    };

    // Change a private property of the library
    _myLibraryObject.setSkip = function (skip) {
      if (typeof skip === 'number') {
        settings.skip = skip;
      } else {
        console.log('You should send a number to change the skip');
      }

      return skip;
    };

    _myLibraryObject.setTake = function (take) {
      if (typeof take === 'number') {
        settings.take = take;
      } else {
        console.log('You should send a number to change the take');
      }

      return take;
    };

    return _myLibraryObject;
  }

  // My global variable with my code
  if (!window.myWindowGlobalLibraryName) {
    window.myWindowGlobalLibraryName = myLibrary();
  }
})(window);

console.log(myWindowGlobalLibraryName);
// PUBLIC => {setPageSize: ƒ, setSkip: ƒ, setTake: ƒ, getPageSize: ƒ}
