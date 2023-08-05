// Write your JS code here
import {Component} from "react"
import CryptocurrencyItem from "../CryptocurrencyItem"
import "./index.css"
import Loader from "react-loader-spinner"

class CryptocurrenciesList extends Component{
    state = {
        currenciesList: [],
        isLoading: true
    }

    componentDidMount(){
        this.getCrypotocurrenciesList()
    }

    getCrypotocurrenciesList = async () => {
        const response = await fetch("https://apis.ccbp.in/crypto-currency-converter")
        const data = await response.json()
        

        const updatedData = data.map(eachData => ({
            id: eachData.id,
            currencyLogo: eachData.currency_logo,
            currencyName: eachData.currency_name,
            euroValue: eachData.euro_value,
            usdValue: eachData.usd_value
        }))

        this.setState({currenciesList: updatedData, isLoading: false})

    }

    renderCryptoCurrenciesDetails = () => {
        const {currenciesList} = this.state

        return (
            <div className="cryptocurrencies-container">
                <h1 className="heading"> Cryptocurrency Tracker </h1>
                <img className="cryptocurrency-image" alt="cryptocurrency"
                    src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"/>
                <div className="cryptocurrency-list-container">
                    <ul className="heading-container"> 
                        <li className="header"> Coin Type </li>
                        <ul className="container">
                            <li className="header"> USD </li>
                            <li className="header-2"> EURO </li>
                        </ul>
                    </ul>
                    <ul className="currencies-items-container">
                        {currenciesList.map(eachItem => <CryptocurrencyItem currencyItem={eachItem} key={eachItem.id} />)}
                    </ul>
                </div>
            </div>
        )
    }

    renderLoader = () => {
        return(
            <div className="loader" data-testid="loader">
                <Loader type="Rings" color="#ffffff" height={80} width={80} />
            </div>
        )
    }

    render(){
        const {isLoading} = this.state
        return(
           <>
            {isLoading? (this.renderLoader()): (this.renderCryptoCurrenciesDetails())}
           </>
        )
    }
}

export default CryptocurrenciesList