// import React from 'react'

// const Header = (props) => {
//   return (
//     <header>
//         <h1>{props.name}</h1>
//     </header>
//   )
// }

// export default Header
import React from "react";

function Header({ name = "Blog" }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

export default Header;
