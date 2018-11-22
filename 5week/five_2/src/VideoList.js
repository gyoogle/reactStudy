import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
    
    const videoItems = props.videos.map((video) => {
        return (
            <VideoItem video={video} key={video.etag} onVideoSelect={props.onVideoSelect}/>
        )
    })

    return (
        <ul className="col-md-6 list-group">
          {videoItems}
       </ul>
    );
}

export default VideoList;
