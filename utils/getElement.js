function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(`The was an error with '${selection}' does not exist`);
}

export default getElement;
