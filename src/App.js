import React, { Component } from 'react';
import SimplePDF from "./pdf.js";

require('tachyons');

const style = {
    maxHeight: "100vh",
}


class App extends Component {
  render() {
    return (
      <div className="mw9 center bg-near-black absolute--fill ">
        <div className="center" style={ style }>
          <SimplePDF file={process.env.PUBLIC_URL + '/pdfs/AHi_j0149.PDF'} />
        </div>
      </div>
    );
  }
}

export default App;
