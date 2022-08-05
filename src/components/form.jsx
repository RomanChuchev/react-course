import React, { Component } from "react";

export default class SubscriptionForm extends Component {
   constructor() {
      super()

      this.state = {
         card: '',
         email: '',
         isAgreeWithTerms: false,
      }

      this.cardRef = React.createRef();
      this.emailRef = React.createRef();
   }

   componentDidMount() {
      this.cardRef.current.focus()
   }

   handleEmail = (event) => {
      this.setState({email: event.target.value})
   }

   handleCard = (event) => {
      this.setState(() => ({card: event.target.value}), () => {
         if(this.state.card.length === 16) {
            this.emailRef.current.focus()
         }
      })
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
      const {card, email, isAgreeWithTerms} = this.state

      return ( 
         <div>
         <h2>Конролируемые формы</h2>
         <input 
               type="card"
               name="card "
               placeholder="card"
               onChange={this.handleCard}
               value={card} 
               ref={this.cardRef}
            />
            <input 
               type="email"
               name="email "
               placeholder="email"
               onChange={this.handleEmail}
               value={email} 
               ref={this.emailRef}
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