import React, { Component } from 'react';
import CreditCardInput from 'react-credit-card-input';
import logo from './logo.svg';
import './App.css';
import firebase from './firebase.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cardNumber: "",
      cardExp: "",
      cardCVC: ""
    }
    this.saveCard = this.saveCard.bind(this);
    this.handleCardNumberChange = this.handleCardNumberChange.bind(this);
    this.handleCardExpiryChange = this.handleCardExpiryChange.bind(this);
    this.handleCardCVCChange = this.handleCardCVCChange.bind(this);
  }

  saveCard() {
    const db = firebase.database().ref("cards");
    const card = {
      number: this.state.cardNumber,
      exp: this.state.cardExp,
      cvc: this.state.cardCVC
    }
    db.push(card);
  }

  handleCardNumberChange(event) {
    this.setState({cardNumber: event.target.value});
  }

  handleCardExpiryChange(event) {
    this.setState({cardExp: event.target.value});
  }

  handleCardCVCChange(event) {
    this.setState({cardCVC: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <p>Please pay us</p>
        <CreditCardInput
          cardNumberInputProps={{ onChange: this.handleCardNumberChange }}
          cardExpiryInputProps={{ onChange: this.handleCardExpiryChange }}
          cardCVCInputProps={{ onChange: this.handleCardCVCChange }}
          fieldClassName="input"
        />
        <br/>
        <br/>
        <button className="Button" onClick={this.saveCard}>Submit Payment</button>
      </div>
    );
  }
}

export default App;
