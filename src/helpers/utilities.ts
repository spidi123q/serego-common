import { isString } from "lodash";

/**
 * Scroll to particular position within page
 * @param target Id or html element object ext "#test"
 * @param highlight
 * @param instant
 */
export const scrollToTarget = (
  target: HTMLElement | string,
  highlight: boolean = true,
  instant: boolean = false
) => {
  let elementToScrollTo: HTMLElement | null;

  if (isString(target)) {
    elementToScrollTo = document.getElementById(target.replace("#", ""));
  } else {
    elementToScrollTo = target;
  }

  // Element exist in Dom
  if (elementToScrollTo) {
    if (highlight) {
      //remove existing animate classes
      elementToScrollTo.classList.remove("animate__animated", "animate__flash");
    }

    const intersectionObserver = new IntersectionObserver((entries) => {
      let [entry] = entries;
      if (entry.isIntersecting) {
        setTimeout(() => {
          if (elementToScrollTo) {
            if (highlight) {
              elementToScrollTo.classList.add(
                "animate__animated",
                "animate__flash"
              );
            }
            elementToScrollTo.focus();
          }
        }, 50);
      }
    });
    intersectionObserver.observe(elementToScrollTo);
    elementToScrollTo.scrollIntoView({ behavior: instant ? "auto" : "smooth" });
  } else {
    console.error(`Element you tried to scroll to (${target}) does not exist`);
  }
};
