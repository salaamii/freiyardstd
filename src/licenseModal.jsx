import licenseData from "./Licensedata"

const LicenseModal = ({pendingBeat, setPendingBeat}) => {

    if (!pendingBeat) return null;

    return (
        <>
            <div className="overlay"></div>
            <div className="modal-container">
                <div className="close-modal" onClick={()=> {setPendingBeat(null)}}><i className="fa-solid fa-xmark fa-2xl"></i></div>
                <div className="beat-title-container">
                    <h1>{pendingBeat.name}</h1>
                    <div className="beat-details">
                        <p>{pendingBeat.composer}</p>
                        <p>{pendingBeat.bpm}BPM</p>
                        <p>{pendingBeat.genre}</p>
                    </div>
                </div>

                     <h1>SELECT LICENSE</h1>

                <div className="select-license-container">

                    {licenseData.map((license) => {

                        return (

                            <div className="licenseCard modal-license" key={license.id}>
                                
                                <h3 >{license.title}</h3>
                                <h1>{license.price}</h1>

                                <ul>
                                    <li>{license.format}</li>
                                    <li>{license.streams} streams</li>
                                    <li>{license.use}</li>
                                    <li>{license.video}</li>
                                </ul>

                                    <button><i className="fa-solid fa-cart-shopping fa-xl"></i></button>
                            </div>

                    )})}
                 
                </div>
            </div>

        </>    
    )
}

export default LicenseModal