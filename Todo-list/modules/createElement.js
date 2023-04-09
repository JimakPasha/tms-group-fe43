export function createElement(tagName, options) {
  const element = Object.assign(document.createElement(tagName), options);
  return element;
}