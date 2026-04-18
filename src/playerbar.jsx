
import {useRef, useEffect} from 'react'
import beatsMeta from './BeatsData';

const PlayerBar = ({currentBeat, isPlaying, setIsPlaying, handleSelectBeat}) => {
         const audioRef = useRef(null);

         useEffect(() => {
            if (audioRef.current && currentBeat) {
                audioRef.current.src = currentBeat.link;
                audioRef.current.play();
            }
         }, [currentBeat])

         useEffect(()=> {
            if (!audioRef.current) return;
            isPlaying ? audioRef.current.play() : audioRef.current.pause()
         }, [isPlaying])


            const handlePrev = () => {
                const currentIndex =  beatsMeta.findIndex(beat => beat.id === currentBeat.id);

                const prevIndex = currentIndex - 1;

                    if (prevIndex < 0) { 
                        return
                    } else {

                        handleSelectBeat(beatsMeta[prevIndex])
                    }
            
            }


            const handleNext = () => {
                    const currentIndex = beatsMeta.findIndex(beat => beat.id === currentBeat.id);

                    const nextIndex = currentIndex + 1;
                    
                    if (nextIndex >=beatsMeta.length) {
                        return;
                    }
                        else {
                            handleSelectBeat(beatsMeta[nextIndex])
                        }
            }
            

            
            
        


        if (!currentBeat) return null;

       

        

       
    return (
                                             
        <div className="player-bar-container">
            <div className="details">
                 <h2>{currentBeat.name}</h2>

                <div className="more-de">
                    <p>{currentBeat.composer}</p>   
                    <p>{currentBeat.key}</p>
                    <p>{currentBeat.bpm}BPM</p>
                </div>
            </div>

            <div className="media-control">
                <div className="prev" onClick={handlePrev}><i class="fa-solid fa-backward fa-xl"></i></div>
                <div className="play" onClick ={() => setIsPlaying(prev => !prev)}>{isPlaying ?<i class="fa-solid fa-pause fa-xl"></i>
                 :<i class="fa-solid fa-play fa-xl"></i>}</div>
                <div className="next" onClick={handleNext}><i class="fa-solid fa-forward fa-xl"></i></div>
            </div>

            <div className="playtime">
                <p>1:12</p>
                <div className="bar-indicator"></div>
                <p>3:28</p>
            </div>

            <div className="buy-btn btn-container">
                <button>BUY - {currentBeat.price}</button>
            </div>
            <audio ref={audioRef} />
        </div>

       
    )
}

export default PlayerBar