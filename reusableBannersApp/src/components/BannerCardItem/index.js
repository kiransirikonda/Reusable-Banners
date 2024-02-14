import './index.css'

const BannerCardItem = props => {
  const {cardDetails, className} = props

  const {headerText, description} = cardDetails
  return (
    <li className={`li-container ${className}`}>
      <div className="li-div-container">
        <h1>{headerText}</h1>
        <p>{description}</p>
        <button type="button">Show More</button>
      </div>
    </li>
  )
}

export default BannerCardItem
