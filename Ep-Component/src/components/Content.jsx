// import React from 'react'

// export const Content = () => {
//   return (
//     <div>Content</div>
//   )
// }

import React, { Component } from 'react'

// destructuring
let user = {id: "1", name: "Sush"}; 
let {id,name} = user;

export default class Content extends Component {
  render() {
    return (
      <div>Content {name}</div>
    )
  }   
}
