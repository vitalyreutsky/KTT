function setScrollToPipe(pipe) {
  let pipePath = document.querySelector(pipe);

  if (pipePath) {
    let pipePathLength = pipePath.getTotalLength();

    pipePath.style.strokeDasharray = pipePathLength + " " + pipePathLength;

    pipePath.style.strokeDashoffset = pipePathLength;

    window.addEventListener("scroll", () => {
      let scrollPercentage =
        (document.documentElement.scrollTop + document.body.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight);

      let drawLength = pipePathLength * scrollPercentage;

      pipePath.style.strokeDashoffset = pipePathLength - drawLength;
    });
  }
}

if (window.innerWidth > 1200) {
  setScrollToPipe(".pipe path");
} else {
  setScrollToPipe(".pipe-mobile path");
}
