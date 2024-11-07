class Renos {
  createElement(tagName, props = null, ...children) {
    // console.log("tagName", tagName);
    // console.log("props", props);
    // console.log("children", children);

    // Create element
    const element = document.createElement(tagName);

    // Set properties
    if (props) {
      for (const attrName in props) {
        element.setAttribute(attrName, props[attrName]);
      }
    }
    // Object.keys(props).forEach((key) => {
    //   element.setAttribute(key, props[key]);
    // });
    // Object.assign(element, props);

    // Append children
    for (const child of children) {
      if (typeof child === "string" || typeof child === "number") {
        element.appendChild(document.createTextNode(child));
      } else {
        element.appendChild(child);
      }
    }

    // children.forEach((child) => {
    //   if (typeof child === "string") {
    //     element.appendChild(document.createTextNode(child));
    //   } else {
    //     element.appendChild(child);
    //   }
    // });
    return element;
  }
}

export const renos = new Renos();
