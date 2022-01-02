import './player-status-bar.css'

export const PlayerStatusBar = (prop) => {

    const barWidth = 200; // The width of the progress bar
    const fillPercent = (prop.value * 0.01) * barWidth;

    var colorBar = 'progress-bar';
    const color = prop.color;

    if(color !== undefined)
        colorBar += "-" + prop.color; 

    return (
        <div className="player-status-bar">
            <label className='text-container-label' htmlFor="prog-bar"><strong>{prop.name}:</strong></label>

            <div className="progress-bar-background">
                <div id="prog-bar" className={colorBar} style={{'--progress-fill':fillPercent + 'px'}}>
                    <div className="progress-border" style={{'--progress-width':barWidth + 'px'}}/>
                </div>
            </div>
        </div>
    );
}

export default PlayerStatusBar;