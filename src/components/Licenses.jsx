import licenseData from "../data/Licensedata"
import LicenseCard from "./licenseCard"


const License = () => {
    return (
        <section className="license-container">
            <div className="section-header">
                <p>// Pricing</p>
                <h1>License Options</h1>
            </div>

            <div className="License-grid">
                {licenseData.map((license) => (
                    
                    <LicenseCard key={license.id} license = {license}/>
                ))}
            </div>
        </section>
    )
}

export default License