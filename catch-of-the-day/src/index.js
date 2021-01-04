
// let's go!

import React from 'react'; 
import {render} from 'react-dom';
import StorePicker from './components/StorePicker';

render(<StorePicker />, document.querySelector('#main'));


// import React from "react";

// class StorePicker extends React.Component {
//   render() {
//     return (
//       <form className="store-selector">
//         <h2>Please Enter A Store</h2>
//         <input type="text" required placeholder="Store Name" />
//         <button type="submit">Visit Store →</button>
//       </form>
//     );
//   }
// }

// export default StorePicker;
