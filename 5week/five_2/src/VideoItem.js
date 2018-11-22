import React from 'react';

const VideoItem = (props, onVideoSelect) => {
    return (
        <li key={props.video.etag} className="list-group-item mr-5" >
              <div className="video-list media mr-5">
                <div className="media-left">
                  <img
                    className="media-object"
                    src={props.video.snippet.thumbnails.default.url}
                  />
                </div>
                <div className="media-body">
                  <div className="mdial-heading"> {props.video.snippet.title} </div>
                </div>
              </div>
        </li>
    );
 };

export default VideoItem;
