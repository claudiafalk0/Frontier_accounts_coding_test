import React, { Component } from 'react';
import axios from 'axios';


// const Accounts = props => (
//     <ul className="account-data-list">
//         <li><label>Name:</label>{props.account.LastName}, {props.account.FirstName}</li>
//         <li><label>Email:</label>{props.account.Email}</li>
//         <li><label>Phone Number:</label>{props.account.PhoneNumber}</li>
//         <li><label>Amount Due:</label>{props.account.AmountDue}</li>
//         <li><label>Due Date:</label>{props.account.DueDate}</li>
//     </ul>
// )

let overdueAccts = [];
let inactiveAccts = [];
let activeAccts = [];

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state =
            {
                Accounts: []
            }
    }

    componentDidMount() {
        axios.get(`https://frontiercodingtests.azurewebsites.net/api/accounts/getall`)
            .then(res => {
                this.setState({ Accounts: res.data })
            }).catch(function (err) {
                console.log(err)
            })
    }


    activeData() {
        return this.state.Accounts.map(function (currentAccount) {
           if(currentAccount.AccountStatusId === 2){
               overdueAccts.push(currentAccount);
               return console.log(overdueAccts)
           }else if(currentAccount.AccountStatusId === 1){
               return inactiveAccts.push(currentAccount)
           }else{
               return activeAccts.push(currentAccount)
           }
        })
    }

    render() {
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
                            {this.activeData()}
                        <section className="account-column grid" id="active-account-column">
                                <div className="account-container-title" id="active-account-container-title">
                                    
                                    <h3>Active</h3>
                                    {/* if AccountStatusID === 2, display here */}
                                </div>
                                <div className="account-container overdue-account">
                                    <ul className="account-data-list">
                                        <li><label>Name:</label>{activeAccts.LastName}, {activeAccts.FirstName}</li>
                                        <li><label>Email:</label>{activeAccts.Email}</li>
                                        <li><label>Phone Number:</label>{activeAccts.PhoneNumber}</li>
                                        <li><label>Amount Due:</label>{activeAccts.AmountDue}</li>
                                        <li><label>Due Date:</label>{activeAccts.DueDate}</li>
                                    </ul>
                                </div>
                            </section>
                            <section className="account-column grid" id="overdue-account-column">
                                <div className="account-container-title" id="overdue-account-container-title">
                                    
                                    <h3>Overdue</h3>
                                    {/* if AccountStatusID === 2, display here */}
                                </div>
                                <div className="account-container overdue-account">
                                    <ul className="account-data-list">
                                        <li><label>Name:</label>{overdueAccts.LastName}, {overdueAccts.FirstName}</li>
        <li><label>Email:</label>{overdueAccts.Email}</li>
        <li><label>Phone Number:</label>{overdueAccts.PhoneNumber}</li>
        <li><label>Amount Due:</label>{overdueAccts.AmountDue}</li>
        <li><label>Due Date:</label>{overdueAccts.DueDate}</li>
                                    </ul>
                                </div>
                            </section>
                            <div className="account-column grid" id="inactive-account-column">
                                <div className="account-container-title" id="inactive-account-container-title">
                                    <h3>Inactive</h3>
                                    {/* if AccountStatusID === 0, display here */}
                                </div>
                                <div className="account-container inactive-account">
                                    <ul className="account-data-list">
                                        <li><label>Name:</label>{overdueAccts.LastName}, {overdueAccts.FirstName}</li>
                                        <li><label>Email:</label>{inactiveAccts.Email}</li>
                                        <li><label>Phone Number:</label>{inactiveAccts.PhoneNumber}</li>
                                        <li><label>Amount Due:</label>{inactiveAccts.AmountDue}</li>
                                        <li><label>Due Date:</label>{inactiveAccts.DueDate}</li>
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