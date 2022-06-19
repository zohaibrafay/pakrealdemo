// import React, {  useEffect } from 'react'
// import { getAdminVideos } from '../../actions/videoActions'
// import { useDispatch, useSelector } from 'react-redux'
//  import { Link } from 'react-router-dom'
 
//  const Video = ({history}) => {
//     const dispatch = useDispatch();
//     const { videos } = useSelector(state => state.videos);
//     useEffect(async () => {
//         await dispatch(getAdminVideos());
//         console.log("Videos",videos);
    

//     }, [dispatch, history])
//      return (
//          <div className='row'>

//             {videos && videos.length > 0 &&

//  videos.map((video,index)=>{
//   return (
//       <div className={`col-sm-12 col-md-6 col-lg-4 my-3`}>
//         <div className="card p-3 rounded" key={index}>
//         <video style={{'width':'100%'}}  controls>
//       <source src={video.clips[0].url} type="video/mp4" /> 
//       </video> 
                                    

//    <div className="card-body d-flex flex-column">
//       <h5 className="card-title">
//         <Link to={`/video/${video._id}`}>{video.name}</Link>
//       </h5>
//       <div className="ratings mt-auto">
//         <div className="rating-outer">
//           <div className="rating-inner" style={{ width: `${(video.ratings / 5) * 100}%` }}></div>
//         </div>
//         <span id="no_of_reviews">({video.numOfReviews} Reviews)</span>
//       </div>
//       <p className="card-text">{video.numOfDays}</p>
//       <Link to={`/video/${video._id}`} id="view_btn" className="btn btn-block ">View Details</Link>
//     </div>
//                           </div>
//                           </div>
//                         )

//                     })

//             }
        
//          </div>
         
//      )
//  }
 
//  export default Video;



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
        <div className="card p-3 rounded" key={index}>
        <video style={{'width':'100%'}}  controls>
      <source src={video.clips[0].url} type="video/mp4" /> 
      </video> 
                                    

   <div className="card-body d-flex flex-column">
      <h5 className="card-title">
        <Link to={`/videos/${video._id}`}>{video.name}</Link>
      </h5>
      <div className="ratings mt-auto">
        <div className="rating-outer">
          <div className="rating-inner" style={{ width: `${(video.ratings / 5) * 100}%` }}></div>
        </div>
        <span id="no_of_reviews">({video.numOfReviews} Reviews)</span>
      </div>
      <p className="card-text">{video.numOfDays}</p>
      <Link to={`/videos/${video._id}`} id="view_btn" className="btn btn-block ">View Details</Link>
    </div>
                          </div>
                          </div>
                        )

                    })

            }
        
         </div>
         
     )
 }
 
 export default Video;