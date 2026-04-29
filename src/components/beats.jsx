import beatsMeta from "../data/BeatsData"
import Beatcard from "./beatcard"

const BeatsPage = ({onSelectBeat, setPendingBeat}) => {

    return (

        <section className="beat-card-container">
            <div className="section-header">
                <p>// Latest Drops</p>
                <div className="section-cta">
                    <h1>Featured Beats</h1>
                    <p className="view-all-cta">View All</p>
                </div>
            </div>

            <div className="beats-grid">
                {beatsMeta.map((beat) => (
                    <Beatcard key={beat.id} beat={beat} onSelectBeat={onSelectBeat} setPendingBeat={setPendingBeat}/>
                ))}
            </div>
        </section>
    )
}

export default BeatsPage