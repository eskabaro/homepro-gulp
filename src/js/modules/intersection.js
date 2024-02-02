const itemsHead = document.querySelectorAll("#observer");
const itemsUl = document.querySelectorAll("#observer-list");

const observerHead = new IntersectionObserver(
  (entries) => {
    entries.forEach((item) => {
      if (item.isIntersecting) {
        item.target.classList.add("observer__active");
      } else {
        item.target.classList.remove("observer__active");
      }
    });
  },
  {
    threshold: 1,
  }
);

itemsHead.forEach((item) => {
  item.classList.add("observer");

  observerHead.observe(item);
});

const observerUl = new IntersectionObserver(
  (entries) => {
    entries.forEach((item) => {
      const animation = (isAdd) => {
        const array = item.target.children;

        for (let i = 0; i < array.length; i++) {
          const element = array[i];

          element.classList[isAdd]("observer-list");
        }

        for (let i = 0; i < array.length; i++) {
          const element = array[i];

          setTimeout(() => {
            element.classList[isAdd]("active-list");
          }, (i + 2) * 140);
        }
      };

      if (item.isIntersecting) {
        animation("add");
      } else {
        animation("remove");
      }
    });
  },
  { threshold: 0.2 }
);

itemsUl.forEach((item) => {
  observerUl.observe(item);
});
