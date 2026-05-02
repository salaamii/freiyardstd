import Beatcard from "./beatcard"
import { useState, useEffect } from "react";
import {supabase} from '../supabase';
const BeatsPage = ({onSelectBeat, setPendingBeat}) => {

        const [beats, setBeats] = useState([]);

        useEffect(()=> {
            async function beatFetch() {
                const {data, error} = await supabase.from('Beats').select('*');
                if (error) return console.error(error);
                 setBeats(data);
            }

            beatFetch ();
        }, [])
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
                {beats.map((beat) => (
                    <Beatcard key={beat.id} beat={beat} onSelectBeat={onSelectBeat} setPendingBeat={setPendingBeat}/>
                ))}
            </div>
        </section>
    )
}

export default BeatsPage