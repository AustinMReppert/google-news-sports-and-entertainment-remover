// The page does not load entirely until you scroll down
document.addEventListener("scroll", (e) => {
  // Find the entertainment and science elements
  let entertainmentElement = Array.from(document.getElementsByTagName("a")).filter((a) => {
    return a.innerText === "Entertainment";
  })[0];
  let scienceElement = Array.from(document.getElementsByTagName("a")).filter((a) => {
    return a.innerText === "Science";
  })[0];

  // Find their common parent
  while (entertainmentElement.parentElement !== scienceElement.parentElement) {
    entertainmentElement = entertainmentElement.parentElement;
    scienceElement = scienceElement.parentElement;
  }

  // Remove all elements in [Entertainment, Science)
  let current = entertainmentElement;
  while (current.nextSibling !== scienceElement) {
    let tmp = current.nextSibling;
    current.remove();
    current = tmp;
  }
})