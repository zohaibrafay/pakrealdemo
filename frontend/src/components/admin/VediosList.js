
import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MDBDataTable } from 'mdbreact'

import MetaData from '../layout/MetaData'
import Loader from '../layout/Loader'
import Sidebar from './Sidebar'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { getAdminVideos, deleteVideo, clearErrors } from '../../actions/videoActions'
import { DELETE_VIDEO_RESET } from '../../constants/videoConstants'

const VediosList = ({history}) => {
    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, videos } = useSelector(state => state.videos);
    const { error: deleteError, isDeleted } = useSelector(state => state.video)

    useEffect(() => {
        dispatch(getAdminVideos());

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (deleteError) {
            alert.error(deleteError);
            dispatch(clearErrors())
        }

        if (isDeleted) {
            alert.success('Video deleted successfully');
            history.push('/admin/videos');
            dispatch({ type: DELETE_VIDEO_RESET })
        }

    }, [dispatch, alert, error, deleteError, isDeleted, history])

    const setVideos = () => {
        const data = {
            columns: [
                {
                    label: 'ID',
                    field: 'id',
                    sort: 'asc'
                },
                {
                    label: 'Name',
                    field: 'name',
                    sort: 'asc'
                },
                {
                    label: 'NumOfDays',
                    field: 'numOfDays',
                    sort: 'asc'
                },
                {
                    label: 'ProjStartDate',
                    field: 'projStartDate',
                    sort: 'asc'
                },
                {
                    label: 'Actions',
                    field: 'actions',
                }
            ],
            rows: []
        }

        console.log("videos",videos);
        videos.forEach(video => {
            data.rows.push({
                id:<Fragment>
                    <video width="240" height="240" controls>
                       <source src={video.clips[0].url} type="video/mp4" />
                    </video>

                </Fragment>,
                name: video.name,
                numOfDays: `$${video.numOfDays}`,
                projStartDate: video.projStartDate,
                actions: <Fragment>
                    <Link to={`/admin/video/${video._id}`} className="btn btn-primary py-1 px-2">
                        <i className="fa fa-pencil"></i>
                    </Link>
                    <button className="btn btn-danger py-1 px-2 ml-2" onClick={() => deleteVideoHandler(video._id)}>
                        <i className="fa fa-trash"></i>
                    </button>
                </Fragment>
            })
        })
        return data;
    }

    const deleteVideoHandler = (id) => {
        dispatch(deleteVideo(id))
    }

    return (
<Fragment>
            <MetaData title={'All Videos'} />
            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>

                <div className="col-12 col-md-10">
                    <Fragment>
                        <h1 className="my-5">All Videos</h1>

                        {loading ? <Loader /> : (
                            <MDBDataTable
                                data={setVideos()}
                                className="px-3"
                                bordered
                                striped
                                hover
                            />
                        )}

                    </Fragment>
                </div>
            </div>

        </Fragment>
)
}


export default VediosList
    //     <Fragment>
    //     <MetaData title={'Video List'} />
    //     <div className="row">
    //         <div className="col-12 col-md-2">
    //             <Sidebar />
    //         </div>
    
    //         <div className="col-12 col-md-10" >
    //             <Fragment>
    //             <h1 className="my-5">All Videos</h1>
    //             <div id="example_wrapper" className="dataTables_wrapper my-5">
    //             <div className="dataTables_length" id="example_length">
    //             <label>Show <select name="example_length" aria-controls="example" className>
    //             <option value={10}>10</option>
    //             <option value={25}>25</option>
    //             <option value={50}>50</option>
    //             <option value={100}>100</option>
    //             </select> entries</label></div>
    //             <div id="example_filter" className="dataTables_filter"><label>Search:<input type="search" className placeholder aria-controls="example" /></label></div><table id="example" className="display dataTable" style={{width: '100%'}} aria-describedby="example_info">
        
    
    
    //             <table class="table">
    //      <thead>
    //          <tr>
    //           <th>Video ID</th>
    //           <th>Project title</th>
    //           <th>Number of Days</th>
    //           <th>Start Date</th>
    //           <th>Action</th>
    //          </tr>
    //      </thead>
    //      <tbody>
    //            <tr>
    //                  <td data-label="S.No">1</td>
    //                  <td data-label="Name">Project 1</td>
    //                  <td data-label="Age">10</td>
    //                  <td data-label="Marks%">1 March 2022</td>
    //              <td data-label="Staus"> <Link to="/admin/updatevideo"><i className="fa fa-pencil"></i> </Link>  <i className="fa fa-trash"></i> </td>
    //            </tr>
    
    //            <tr>
    //                  <td data-label="S.No">2</td>
    //                  <td data-label="Name">Project 2</td>
    //                  <td data-label="Age">20</td>
    //                  <td data-label="Marks%">2 March 2022</td>
    //                  <td data-label="Staus"> <Link to="/admin/updatevideo"><i className="fa fa-pencil"></i> </Link>  <i className="fa fa-trash"></i></td>
    //            </tr>
    
         
    //      </tbody>
    //    </table>
    //   </table><div className="dataTables_info" id="example_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div>
    //   </div>
    
    //             </Fragment>
    //         </div>
    //     </div>
    
    // </Fragment>
    