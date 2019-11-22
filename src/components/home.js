import React, { Component } from 'react';
import axios from 'axios';
import "./home.css";


//things still to do:
//change phone number format to (###) ###-####
//change date format to ##/##/####
 //----in order to do both of these I will need to add a class to the phone number and the date and use jQuery with a regular expression to format them accordingly
//change amout due format to $##.##
//-----probably similar to above with a regular expression. I currently have the .## formatted with toFixed, but I'm trying to avoid the floatingPoint errors that can occur
//hide empty due date for inactive accounts
//-----I know I could simply remove the due date from the inactive list, but that's not within best coding standards. So I'd like to write a function which would read if PaymentDueDate === null then .hide the due date li 
//add key prop to new arrays
// -----I need a unique key for the li elements. Under normal circumstances I would separate the li from the map, and attach the key in the return statement when I call for the li element, however because I built the li inside the render, I will need to research how to add the key inside the map. 

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
                                    <ul key= "activeAccounts" className="account-data-list">
                                        {activeAccts.map(function(elem) {
                                            return <> <li> <label>Name:</label>  {elem.LastName}, {elem.FirstName} </li>
                                             <li> <label>Email:</label> {elem.Email}</li>
                                            <li> <label>Phone Number:</label> {elem.PhoneNumber}</li>
                                            <li> <label>Amount Due:</label>{elem.AmountDue.toFixed(2)}</li>
                                            <li> <label>Due Date:</label>{elem.PaymentDueDate}</li>
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
                                    <ul  className="account-data-list">
                                    {overdueAccts.map(function(elem) {
                                             return <> <li > <label>Name:</label>  {elem.LastName}, {elem.FirstName} </li>
                                             <li> <label>Email:</label> {elem.Email}</li>
                                            <li> <label>Phone Number:</label> {elem.PhoneNumber}</li>
                                            <li> <label>Amount Due:</label>{elem.AmountDue.toFixed(2)}</li>
                                            <li> <label>Due Date:</label>{elem.PaymentDueDate}</li>
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
                                    <ul key="inactiveAccounts" className="account-data-list">
                                    {inactiveAccts.map(function(elem) {
                                             return <> <li> <label>Name:</label>  {elem.LastName}, {elem.FirstName} </li>
                                             <li> <label>Email:</label> {elem.Email}</li>
                                            <li> <label>Phone Number:</label> {elem.PhoneNumber}</li>
                                            <li> <label>Amount Due:</label>{elem.AmountDue.toFixed(2)}</li>
                                            <li> <label>Due Date:</label>{elem.PaymentDueDate}</li>
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