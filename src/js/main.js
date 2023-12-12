document.documentElement.classList.add("js-enabled");
const cacheDom = document.querySelector(".parallax");
window.addEventListener("scroll", () => {
    const scrolledHeight = window.scrollY;
    const limit = cacheDom.offsetTop + cacheDom.offsetHeight;
    //console.log(scrolledHeight, cacheDom.offsetTop);
    if (scrolledHeight > cacheDom.offsetTop && scrolledHeight <= limit) {
      cacheDom.style.backgroundPositionY = (scrolledHeight - cacheDom.offsetTop) / 2 + "px";
    } else {
      cacheDom.style.backgroundPositionY = "0";
    }
});

/*

(function () {
  const app = {
    cacheDom() {
      this.parallax = document.querySelector(".parallax");
    },
    init() {
      document.documentElement.classList.add('js-enabled');
      this.cacheDom();
      window.addEventListener("scroll", () => {
        this.relax();
      });
    },
    relax() {
      const scrolledHeight = window.pageYOffset;
      const limit = this.parallax.offsetTop + this.parallax.offsetHeight;
      console.log(scrolledHeight,this.parallax.offsetTop);
      if (scrolledHeight > this.parallax.offsetTop && scrolledHeight <= limit) {
        this.parallax.style.backgroundPositionY = (scrolledHeight - this.parallax.offsetTop) / 2 + "px";
      } else {
        this.parallax.style.backgroundPositionY = "0";
      }
    }
  };
  app.init();
})();

*/