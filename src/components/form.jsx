import React, { Component } from "react";

export default class SubscriptionForm extends Component {
   state = {
      email: '',
      isAgreeWithTerms: false,
   }

   handleEmail = (event) => {
      this.setState({email: event.target.value})
   }
   handleCheckbox = (event) => {
      this.setState({isAgreeWithTerms: event.target.checked})
   }
   handleSubmit = () => {
      const isValidEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(this.state.email.toLocaleLowerCase());
      const isValidCheckbox = this.state.isAgreeWithTerms

      if (!isValidEmail) {
         alert('Your email is not valid')
         return
      }
      if (!isValidCheckbox) {
         alert('You should accept all terms and contitions')
         return
      }
      this.setState({email: '', isAgreeWithTerms: false})
      alert('Thank you for subscription!')
      
   }
   render() {
      const {email, isAgreeWithTerms} = this.state

      return ( 
         <div>
            <input 
               type="email"
               name="email "
               placeholder="email"
               onChange={this.handleEmail}
               value={email} 
            />
            <br />
            <label> 
               <input 
                  type="checkbox"
                  name="isAgreeWithTerms"
                  onChange={this.handleCheckbox}
                  checked={isAgreeWithTerms}
               />
               I agree with terms and conditios
            </label>
            <br />
            <button onClick={this.handleSubmit}>Send</button>
         </div>
      )
   }
}