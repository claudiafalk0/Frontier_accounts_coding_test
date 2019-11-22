import React, { Component } from 'react';
import axios from 'axios';


const Accounts =  props => (
    <div className="account-container active-account">
    <ul className="account-data-list">
    <li><label>Name:</label>{props.account.LastName}, {props.account.FirstName}</li>
    <li><label>Email:</label>{props.account.Email}</li>
    <li><label>Phone Number:</label>{props.account.PhoneNumber}</li>
    <li><label>Amount Due:</label>{props.account.AmountDue}</li>
    <li><label>Due Date:</label>{props.account.DueDate}</li>
    </ul>
    </div> 
)

export default class Home extends Component {

    state = {
        Accounts: []
    }

    componentDidMount(){
        axios.get(`https://frontiercodingtests.azurewebsites.net/api/accounts/getall`)
            .then(res => {
                const Accounts = res.data;
                this.setState({Accounts})
            })
    }

    acctData(){
        return this.state.Accounts.map(function(currentAccount, i){
            return <Accounts account={currentAccount} key={i} />;
        })
    }
    render (){
        return (
            <div>
    <article className="grid">
      <header className="grid">
        <div className="title-container">
          <h1>Coding Test</h1>
        </div>
      </header>
      <main className="content grid" id="home-content">
        <div className="content-title-container">
          <h2>Accounts</h2>
        </div>
        <section className="grid" id="account-grid">
          <section className="account-column grid" id="active-account-column">
            <div className="account-container-title" id="active-account-container-title">
              <h3>Active</h3>
            </div>
                {this.acctData()}
          </section>
          <section className="account-column grid" id="overdue-account-column">
            <div className="account-container-title" id="overdue-account-container-title">
              <h3>Overdue</h3>
            </div>
            <div className="account-container overdue-account">
              <ul className="account-data-list">
                <li><label>Name:</label></li>
                <li><label>Email:</label></li>
                <li><label>Phone Number:</label></li>
                <li><label>Amount Due:</label></li>
                <li><label>Due Date:</label></li>
              </ul>
            </div>
          </section>
          <div className="account-column grid" id="inactive-account-column">
            <div className="account-container-title" id="inactive-account-container-title">
              <h3>Inactive</h3>
            </div>
            <div className="account-container inactive-account">
              <ul className="account-data-list">
                <li><label>Name:</label></li>
                <li><label>Email:</label></li>
                <li><label>Phone Number:</label></li>
                <li><label>Amount Due:</label></li>
                <li><label>Due Date:</label></li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <footer className="grid">
        <p className="copy">&copy;<script>document.write(new Date().getFullYear())</script></p>
      </footer>
    </article>
  </div>
        )
    }
}