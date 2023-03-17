const workSection = document.querySelector(".count-items");

if (workSection) {
  const countValueOne =
    +document.querySelector("[data-count-one]").dataset.countOne;

  const countValueSecond = +document.querySelector("[data-count-second]")
    .dataset.countSecond;

  const countValueThird =
    +document.querySelector("[data-count-third]").dataset.countThird;

  const countValueFourth = +document.querySelector("[data-count-fourth]")
    .dataset.countFourth;

  const objs = [
    {
      countItem: document.querySelector(".count-num--one span"),
      countValue: countValueOne,
      arrCount: [
        "0000",
        "00" + 42,
        "0" + 123,
        "0" + 234,
        "0" + 258,
        "0" + 389,
        "0" + 476,
        "0" + 789,
        "0" + 978,
        1098,
        1123,
        1200,
        countValueOne,
      ],
    },
    {
      countItem: document.querySelector(".count-num--second span"),
      countValue: countValueSecond,
      arrCount: [
        "000",
        "0" + 30,
        "0" + 48,
        100,
        132,
        179,
        197,
        200,
        222,
        236,
        240,
        countValueSecond,
      ],
    },
    {
      countItem: document.querySelector(".count-num--third span"),
      countValue: countValueThird,
      arrCount: [0, 1, 2, 3, 4, 5, countValueThird],
    },
    {
      countItem: document.querySelector(".count-num--fourth span"),
      countValue: countValueFourth,
      arrCount: [0, 1, 2, 3, 4, 5, countValueFourth],
    },
  ];

  function printNumbers() {
    i = 0;
    setTimeout(function run() {
      if (
        i < objs[0].arrCount.length ||
        i < objs[1].arrCount.length ||
        i < objs[2].arrCount.length ||
        i < objs[3].arrCount.length
      ) {
        go(i);
        i++;
        setTimeout(run, 50);
      }
    }, 50);
  }

  function go(i) {
    objs.forEach(({ countItem, countValue, arrCount }) => {
      if (arrCount[i] <= countValue) {
        countItem.innerHTML = arrCount[i];
      }
    });
  }

  const workObserver = new IntersectionObserver(
    (entries, observer) => {
      const [entry] = entries;

      if (!entry.isIntersecting) return;

      printNumbers();
    },

    {
      root: null,
      threshold: 0,
    }
  );

  workObserver.observe(workSection);
}
