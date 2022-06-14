import React, { Fragment, useState, useEffect } from 'react'

import MetaData from '../layout/MetaData'
import Sidebar from './Sidebar'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { newPack, clearErrors } from '../../actions/packageActions'
import { NEW_PACK_RESET } from '../../constants/packageConstants'

const NewPackage = ({ history }) => {
  const [numberofmarla, setNumberofmarla] = useState(0);
    const [estimatedsquarefoot, setEstimatedsquarefoot] = useState(0);
    const [cement, setCement] = useState(0);
    const [sand, setSand] = useState(0);
    const [aggregate, setAggregate] = useState(0);
    const [steel, setSteel] = useState(0);
    const [finishers, setFinishers] = useState(0);
    const [fittings, setFittings] = useState(0);
    const [totalprice, setTotalprice] = useState(0);
    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([])


    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, success } = useSelector(state => state.newPack);

    useEffect(() => {

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (success) {
            history.push('/admin/packs');
            alert.success('Package created successfully');
            dispatch({ type: NEW_PACK_RESET })
        }

    }, [dispatch, alert, error, success, history])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        
        formData.set('numberofmarla', numberofmarla);
        formData.set('estimatedsquarefoot', estimatedsquarefoot);
        formData.set('cement', cement);
        formData.set('sand', sand);
        formData.set('aggregate', aggregate);
        formData.set('steel', steel);
        formData.set('finishers', finishers);
        formData.set('fittings', fittings);
        formData.set('totalprice', totalprice);


        images.forEach(image => {
            formData.append('images', image)
        })

        dispatch(newPack(formData))
    }

    const onChange = e => {

        const files = Array.from(e.target.files)

        setImagesPreview([]);
        setImages([])

        files.forEach(file => {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImagesPreview(oldArray => [...oldArray, reader.result])
                    setImages(oldArray => [...oldArray, reader.result])
                }
            }

            reader.readAsDataURL(file)
        })
    }




  return (
    <Fragment>
    <MetaData title={'New Package'} />
    <div className="row">
        <div className="col-12 col-md-2">
            <Sidebar />
        </div>

        <div className="col-12 col-md-10">
            <Fragment>
            <div class="wrapper my-5"> 
            <form className="shadow-lg" onSubmit={submitHandler} encType='multipart/form-data'>
            <h1 class="mb-4">New Package</h1>

            <div className="form-group">
            <label htmlFor="price_field">No of Marla</label>
                                    <input
                                        type="text"
                                        id="price_field"
                                        className="form-control"
                                        value={numberofmarla}
                                        onChange={(e) => setNumberofmarla(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="price_field">Estimated Square Foot</label>
                                    <input
                                        type="text"
                                        id="price_field"
                                        className="form-control"
                                        value={estimatedsquarefoot}
                                        onChange={(e) => setEstimatedsquarefoot(e.target.value)}
                                    />
                                </div>
              
              
                                <div className="form-group">
                                    <label htmlFor="price_field">Price of Cement (16.4%)</label>
                                    <input
                                        type="text"
                                        id="price_field"
                                        className="form-control"
                                        value={cement}
                                        onChange={(e) => setCement(e.target.value)}
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="price_field">Price of Sand (12.3 %)</label>
                                    <input
                                        type="text"
                                        id="price_field"
                                        className="form-control"
                                        value={sand}
                                        onChange={(e) => setSand(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="price_field">Price of Aggregate (7.4 %)</label>
                                    <input
                                        type="text"
                                        id="price_field"
                                        className="form-control"
                                        value={aggregate}
                                        onChange={(e) => setAggregate(e.target.value)}
                                    />
                                </div>

              <div className="form-group">
                                    <label htmlFor="price_field">Price of Steel (24.6 %)</label>
                                    <input
                                        type="text"
                                        id="price_field"
                                        className="form-control"
                                        value={steel}
                                        onChange={(e) => setSteel(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="price_field">Price of Finishers (16.5 %)=(Paint (4.1 %) + Tiles (8.0 %) + Bricks (4.4 %))</label>
                                    <input
                                        type="text"
                                        id="price_field"
                                        className="form-control"
                                        value={finishers}
                                        onChange={(e) => setFinishers(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="price_field">Price of Fittings (22.8 %)=(Window (3.0 %) + Doors (3.4 %) + Plumbing (5.5 %) + Eletrical (6.8 %) + Sanitary (4.1 %))</label>
                                    <input
                                        type="text"
                                        id="price_field"
                                        className="form-control"
                                        value={fittings}
                                        onChange={(e) => setFittings(e.target.value)}
                                    />
                                </div>
              

                                <div className="form-group">
                                    <label htmlFor="price_field">Total price</label>
                                    <input
                                        type="text"
                                        id="price_field"
                                        className="form-control"
                                        value={totalprice}
                                        onChange={(e) => setTotalprice(e.target.value)}
                                    />
                                </div>


                                <div className='form-group'>
                                    <label>Images</label>

                                    <div className='custom-file'>
                                        <input
                                            type='file'
                                            name='product_images'
                                            className='custom-file-input'
                                            id='customFile'
                                            onChange={onChange}
                                            multiple
                                        />
                                        <label className='custom-file-label' htmlFor='customFile'>
                                            Choose Images
                                     </label>
                                    </div>

                                    {imagesPreview.map(img => (
                                        <img src={img} key={img} alt="Images Preview" className="mt-3 mr-2" width="55" height="52" />
                                    ))}

                                </div>
              
            
                                <button
                                    id="login_button"
                                    type="submit"
                                    className="btn btn-block py-3"
                                    disabled={loading ? true : false}
                                >
                                    CREATE
                                </button>

          </form>
    </div>
            </Fragment>
        </div>
    </div>

</Fragment>
)
}

export default NewPackage
