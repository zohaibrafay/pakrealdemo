import React, { Fragment, useState, useEffect } from 'react'
import MetaData from '../layout/MetaData'
import Sidebar from './Sidebar'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { newVideo, clearErrors } from '../../actions/videoActions'
import { NEW_VIDEO_RESET } from '../../constants/videoConstants'

const UploadVideo = ({history}) => {

  // const [title, setTitle] = useState('');
  const [name, setName] = useState('');
   const [numOfDays, setNumOfDays] = useState(0);
   const [projStartDate, setProjStartDate] = useState('');
  const [description, setDescription] = useState('');
  // const [category, setCategory] = useState('');
  // const [stock, setStock] = useState(0);
 
  const [clips, setClips] = useState();



  
  
 
  // const [seller, setSeller] = useState('');
  
  // const categories = [
  //     'Cement',
  //             'Aggregate',
  //             'Sand',
  //             'Steel',
  //             'Paint',
  //             'Tiles',
  //             'Bricks',
  //             'Window',
  //             'Doors',
  //             'Plumbing',
  //             'Electrical',
  //             'Sanitary',
              
  // ]

  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, error, success } = useSelector(state => state.newVideo);

  useEffect(() => {

      if (error) {
          alert.error(error);
          dispatch(clearErrors())
      }

      if (success) {
          history.push('/admin/videos');
          alert.success('Video Uploaded successfully');
          dispatch({ type: NEW_VIDEO_RESET })
      }

  }, [dispatch, alert, error, success, history])

  const submitHandler = (e) => {
      e.preventDefault();

      let obj ={
        'name': name,
      'numOfDays': numOfDays,
      'projStartDate': projStartDate,
      'description': description,
      'clip': clips,
      }
      // const formData = new FormData();
      // formData.set('name', name);
      // formData.set('numOfDays', numOfDays);
      // formData.set('projStartDate', projStartDate);
      // formData.set('description', description);
      // formData.set('clip', clips);
      dispatch(newVideo(obj))

  }

  const onChange = e => {

      const files = e.target.files[0];
          const reader = new FileReader();
          reader.onload = () => {
            setClips(reader.result)
          }
          reader.readAsDataURL(files)
  }
  return (
    <Fragment>
    <MetaData title={'Upload Video'} />
    <div className="row">
        <div className="col-12 col-md-2">
            <Sidebar />
        </div>

        <div className="col-12 col-md-10">
            <Fragment>
            <div class="wrapper my-5"> 
        <form class="shadow-lg" onSubmit={submitHandler} encType='multipart/form-data'>
            <h1 class="mb-4">Upload video</h1>

            <div class="form-group">
              <label for="name_field">Project Title</label>
              <input
                type="text"
                id="name_field"
                class="form-control"
                value={name}
                 onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div class="form-group">
                <label for="price_field">Number of days</label>
                <input
                  type="text"
                  id="price_field"
                  class="form-control"
                  value={numOfDays}
                  onChange={(e)=>setNumOfDays(e.target.value)}
                />
              </div>

              
              <div class="form-group">
                <label for="stock_field">Project Start Date</label>
                <input
                  type="text"
                  id="stock_field"
                  class="form-control"
                  value={projStartDate}
                  onChange={(e)=>setProjStartDate(e.target.value)}
                />
              </div>

              

              <div class="form-group">
                <label for="description_field">Description</label>
                <textarea class="form-control" id="description_field" rows="8" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} ></textarea>
              </div>

            
              
              <div class='form-group'>
                <label>Video</label>
                
                    <div class='custom-file'>
                        <input
                            type='file'
                            name='product_images'
                            class='custom-file-input'
                            id='customFile'
                            onChange={onChange}
                            multiple
                        />
                        <label class='custom-file-label' for='customFile'>
                            Choose Video
                        </label>
                    </div>

            </div>

  
            <button
              id="login_button"
              type="submit"
              class="btn btn-block py-3"
              disabled={loading ? true : false}
            >
              Upload
            </button>

          </form>
    </div>
            </Fragment>
        </div>
    </div>

</Fragment>
)
}

export default UploadVideo
