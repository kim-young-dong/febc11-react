// index_copy.js
import { useState, resetStateIndex } from "./useState.js";

class Renos {
  constructor() {
    this._rootNode = null;
  }

  static Fragment = "div";

  createElement(tagName, props = null, ...children) {
    const element = document.createElement(tagName);

    if (props) {
      for (const attrName in props) {
        const value = props[attrName];
        if (attrName.startsWith("on")) {
          element.addEventListener(attrName.slice(2).toLowerCase(), value);
        } else {
          element.setAttribute(attrName, value);
        }
      }
    }

    children.forEach((child) => {
      if (typeof child === "string" || typeof child === "number") {
        element.appendChild(document.createTextNode(child));
      } else if (typeof child === "function") {
        element.appendChild(child());
      } else if (child) {
        element.appendChild(child);
      }
    });

    return element;
  }

  createRootNode(rootNode) {
    this._rootNode = rootNode;
    return {
      render: (appFn) => {
        // 렌더링 전에 상태 인덱스 초기화
        resetStateIndex();

        if (rootNode.firstChild) {
          rootNode.firstChild.remove();
        }
        const result = appFn();
        rootNode.appendChild(result);
      },
    };
  }
}

const instance = new Renos();
export default instance;
