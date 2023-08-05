// Write your JS code here
import "./index.css"

const CryptocurrencyItem = (props) => {
    const {currencyItem} = props
    const {id, currencyName, currencyLogo, euroValue, usdValue} = currencyItem
    return(
        <li className="currency-item"> 
            <div className="currency-image-container">
                <img className="logo" src={currencyLogo} alt={currencyName}/>
                <p className="currency-name"> {currencyName} </p>
            </div>
            <div className="usd-euro-container">
                <p className="currency"> {usdValue} </p>
                <p className="currency"> {euroValue} </p>
            </div>
        </li>
    )
}
export default CryptocurrencyItem