
import React, {  useEffect } from 'react'
import { getAdminVideos } from '../../actions/videoActions'
import { useDispatch, useSelector } from 'react-redux'
 import { Link } from 'react-router-dom'
 
 const Video = ({history}) => {
    const dispatch = useDispatch();
    const { videos } = useSelector(state => state.videos);
    useEffect(async () => {
        await dispatch(getAdminVideos());
        console.log("Videos",videos);
    

    }, [dispatch, history])
     return (
         <div className='row'>

            {videos && videos.length > 0 &&

                    videos.map((video,index)=>{
                        return (
                            <div className={`col-sm-12 col-md-6 col-lg-4 my-3`}>
                                 <div className="p-3 rounded" key={index}>
                                  <video style={{'width':'100%'}}  controls>
                                     <source src={video.clips[0].url} type="video/mp4" /> 
                                  </video> 
                                </div>
                          </div>
                       
                        )

                    })

            }
        
         </div>
     )
 }
 
 export default Video;