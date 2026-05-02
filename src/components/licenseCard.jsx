const LicenseCard = ({license}) => {
    return (

        <div className="licenseCard">
            <h3>{license.title}</h3>
            <h1>N{parseFloat(license.price).toLocaleString()}</h1>

            <ul>
                <li>{license.format}</li>
                <li>{license.streams}</li>
                <li>{license.use}</li>
                <li>{license.video}</li>
            </ul>

            
        </div>
    )
}

export default LicenseCard