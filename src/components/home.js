import React, { Component } from 'react';
import axios from 'axios';
import "./home.css";


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
           this.state.Accounts.map(function(currentAccount) {
            if (currentAccount.AccountStatusId === 2) {
                overdueAccts.push(currentAccount);
                return console.log(overdueAccts)
            } else if (currentAccount.AccountStatusId === 1) {
                inactiveAccts.push(currentAccount)
                return console.log(inactiveAccts) 
            } else {
                activeAccts.push(currentAccount)
                return console.log(activeAccts)
            }
           })
    }

    render() {
        return (
            <div>
            {this.activeData()}
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
                                    {/* if AccountStatusID === 2, display here */}
                                </div>
                                <div className="account-container overdue-account">
                                    <ul className="account-data-list">
                                        {activeAccts.map(function(elem) {
                                            return <> <li key={elem.id}> <label>Name:</label>  {elem.LastName}, {elem.FirstName} </li>
                                             <li key={elem.id}> <label>Email:</label> {elem.Email}</li>
                                            <li key={elem.id}> <label>Phone Number:</label> {elem.PhoneNumber}</li>
                                            <li key={elem.id}> <label>Amount Due:</label>{elem.AmountDue}</li>
                                            <li key={elem.id}> <label>Due Date:</label>{elem.DueDate}</li>
                                            </>
                                        })}
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
                                    {overdueAccts.map(function(elem) {
                                             return <> <li key={elem.id}> <label>Name:</label>  {elem.LastName}, {elem.FirstName} </li>
                                             <li key={elem.id}> <label>Email:</label> {elem.Email}</li>
                                            <li key={elem.id}> <label>Phone Number:</label> {elem.PhoneNumber}</li>
                                            <li key={elem.id}> <label>Amount Due:</label>{elem.AmountDue}</li>
                                            <li key={elem.id}> <label>Due Date:</label>{elem.DueDate}</li>
                                            </>
                                        })}
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
                                    {inactiveAccts.map(function(elem) {
                                             return <> <li key={elem.id}> <label>Name:</label>  {elem.LastName}, {elem.FirstName} </li>
                                             <li key={elem.id}> <label>Email:</label> {elem.Email}</li>
                                            <li key={elem.id}> <label>Phone Number:</label> {elem.PhoneNumber}</li>
                                            <li key={elem.id}> <label>Amount Due:</label>{elem.AmountDue}</li>
                                            <li key={elem.id}> <label>Due Date:</label>{elem.DueDate}</li>
                                            </>
                                        })}
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