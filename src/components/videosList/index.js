import style from "./VideosList.module.css"
import Card from "../Card"

function VideosList({ videos, emptyHeading }) {
   
   const count = videos.length
   let heading = emptyHeading
    if(count > 0) {
        const noun = count > 1 ? 'vídeos' :'vídeo'
        heading = `${count} ${noun}`
    }


    return (
        <>
            <h2>{heading}</h2>
            <section className={style.videos}>
                { videos.map((video) => <Card id={video.id} key={video.id} />) }
            </section>
        </>
    )
}

export default VideosList