export function isWebp() {
  //  copied from https://fls.guru/gulp.html

  function testWebP(cb) {
    const webP = new Image();

    webP.onload = webP.onerror = function() {
      // eslint-disable-next-line n/no-callback-literal
      cb(webP.height === 2);
    };

    // eslint-disable-next-line max-len
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  }

  testWebP(function(support) {
    if (support === true) {
      document.querySelector('body').classList.add('webp');
    } else {
      document.querySelector('body').classList.add('no-webp');
    }
  });
}
