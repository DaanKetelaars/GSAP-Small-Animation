const el = {
  rectElem: "#rect_01",
  circleElem: "#circle_01",
  dotElem: "#dot_01",
};

export const chapterOne = () => {
  const tlChapterOne = gsap.timeline({ defaults: { duration: 1 } });

  tlChapterOne
    .set(el.rectElem, {
      scale: 0,
      transformOrigin: "center",
      ease: "power1.in",
    })
    .to(el.rectElem, {
      scale: 1.05,
      transformOrigin: "center",
      ease: "power1.out",
    });

  tlChapterOne
    .set(el.circleElem, {
      scale: 0,
      transformOrigin: "center",
      ease: "back.in",
      delay: -1,
    })
    .to(el.circleElem, {
      scale: 1,
      transformOrigin: "center",
      ease: "back.out",
    });

  tlChapterOne
    .set(el.dotElem, {
      scale: 0,
      transformOrigin: "center",
      ease: "power3.in",
      delay: -2,
    })
    .to(el.dotElem, {
      scale: 1,
      transformOrigin: "center",
      ease: "power3.out",
    });

  return tlChapterOne;
};
