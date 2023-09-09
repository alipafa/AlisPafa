import React from 'react';

import TreeView from 'devextreme-react/tree-view';

import { products } from './data.js';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <TreeView
          id="treeview"
          items={products}
          width={500}
          searchEnabled={true}
        />
      </React.Fragment>
    );
  }
}

export default App;
