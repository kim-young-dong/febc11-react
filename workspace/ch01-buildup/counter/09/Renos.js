class Renos {
  _rootNode;
  _state;

  constructor() {
    this._state = undefined;
    this._rootNode = null;
    this.setState = this.setState.bind(this); // this 바인딩
    this.createRootNode = this.createRootNode.bind(this); // this 바인딩
  }

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

    for (const child of children) {
      if (typeof child === "string" || typeof child === "number") {
        element.appendChild(document.createTextNode(child));
      } else if (typeof child === "function") {
        element.appendChild(child());
      } else {
        element.appendChild(child);
      }
    }

    return element;
  }

  createRootNode(rootNode) {
    let _appComponent;

    return (this._rootNode = {
      render: (appFn) => {
        _appComponent = _appComponent || appFn;

        if (rootNode.firstChild) {
          rootNode.firstChild.remove();
        }
        const result = _appComponent();

        rootNode.appendChild(result);
      },
    });
  }

  setState(newValue) {
    const oldValue = this._state; // 0
    this._state = newValue; // 1

    // 두 값이 같은지 비교해서 같지 않을 경우에(상태가 변경된 경우) 리렌더링한다.
    if (!Object.is(oldValue, newValue)) {
      this._rootNode.render();
    }
  }

  useState(initialState) {
    if (this._state === undefined) {
      this._state = initialState;
    }

    return [this._state, this.setState];
  }
}

export default new Renos();
