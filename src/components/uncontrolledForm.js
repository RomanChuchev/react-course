import React, {Component} from "react";

export default class UncontrollForm extends Component {
   constructor() {
      super()
      
      this.cardRef = React.createRef();
      this.emailRef = React.createRef();
   }

   handleSubmit = (event) => {
      event.preventDefault();
      if (this.cardRef.current.value < 16) {
         alert('invalid card number');
         return
      }
      if (this.emailRef.current.value < 4) {
         alert('invalid email');
         return
      }
      this.cardRef.current.value = '';
      this.emailRef.current.value = '';

   }

   render() {
      return <form onSubmit={this.handleSubmit}>
         <input 
            type="text"
            name="card"
            placeholder="card"
            ref={this.cardRef}
         />
         <input
            type="email"
            name="email"
            placeholder="email"
            ref={this.emailRef}
         />
         <button>Send</button>
      </form>
   }
}