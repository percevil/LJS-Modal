const openButton = document.querySelector(".jsModalButton");
const closeButton = document.querySelector(".jsModalClose");
const modalOverlay = document.querySelector(".modal-overlay");
const wavingHand = document.querySelector(".wave-hand");

openButton.addEventListener("click", (e) => {
  document.body.classList.add("modal-open");
  wave();
});

closeButton.addEventListener("click", (e) => {
  document.body.classList.remove("modal-open");
});

modalOverlay.addEventListener("click", (e) => {
  if (!e.target.closest(".modal")) {
    document.body.classList.remove("modal-open");
    // ^ We can use closest to check whether the modal is an ancestor of the event.target. closest also checks if the event.target matches the given selector.
  }
});

const wave = (_) => {
  const tl = new TimelineMax({});
  tl.set(wavingHand, { transformOrigin: "bottom center" });
  tl.from(wavingHand, 0.5, {
    scale: 0.25,
    opacity: 0,
    ease: Back.easeOut.config(1.5),
  });
  tl.to(wavingHand, 0.2, { rotation: 20 });
  tl.to(wavingHand, 0.2, { rotation: -20 });
  tl.to(wavingHand, 0.2, { rotation: 20 });
  tl.to(wavingHand, 0.2, { rotation: -20 });
  tl.to(wavingHand, 0.2, { rotation: 0 });
};
