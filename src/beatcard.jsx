const Beatcard = ({beat, onSelectBeat}) => {
    return (
        <div className="beatcard">

            <div className="key-genre">
                <p>{beat.id}</p>
                <p>{beat.genre}</p>
            </div>

            <div className="details">
                <h2>{beat.name}</h2>

                <div className="more-de">
                    <div className="de-container">
                         <p>{beat.bpm} BPM</p>   
                         <p>{beat.key}</p>
                         <p>{beat.composer}</p>
                    </div>

                    <div className="play-btn" onClick={()=> onSelectBeat(beat)}><i className="fa-solid fa-play fa-xl" ></i></div>
                    
                    
                </div>

            </div>

            <div className="price-play">
                
                <div className="buy-btn"><button>BUY</button></div>
            </div>
        </div>
    )
}

export default Beatcard