
import { Link } from 'react-router-dom'



import React, { Fragment, useState, useEffect } from 'react'
import Pagination from 'react-js-pagination'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css';

import MetaData from '../layout/MetaData'
import Video from './Video'
import Loader from '../layout/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert';
import { getVideos } from '../../actions/videoActions'



const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range)
const Videodisplay = ({match}) => {

  const [currentPage, setCurrentPage] = useState(1)
  const [numOfDays, setNumOfDays] = useState([1, 1000])
  // const [category, setCategory] = useState('')
  const [rating, setRating] = useState(0)

  // const categories = [
  //     'Electronics',
  //     'Cameras',
  //     'Laptops',
  //     'Accessories',
  //     'Headphones',
  //     'Food',
  //     "Books",
  //     'Clothes/Shoes',
  //     'Beauty/Health',
  //     'Sports',
  //     'Outdoor',
  //     'Home'
  // ]

  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, videos, error, videosCount, resPerPage, filteredVideosCount } = useSelector(state => state.videos)

  const keyword = match.params.keyword

  useEffect(() => {
      if (error) {
          return alert.error(error)
      }

      dispatch(getVideos(keyword, currentPage, numOfDays,  rating));


  }, [dispatch, alert, error, keyword, currentPage, numOfDays, rating])

  function setCurrentPageNo(pageNumber) {
      setCurrentPage(pageNumber)
  }

  let count = videosCount;
  if (keyword) {
      count = filteredVideosCount
  }

  return (




    <Fragment>
     {loading ? <Loader /> : (
                <Fragment>
                    <MetaData title={'Buy Best Products Online'} />
                    <h1 id="products_heading">Latest Videos</h1>
                    <section id="products" className="container mt-5">
                        <div className="row">

                            {keyword ? (
                                <Fragment>
                                    <div className="col-6 col-md-3 mt-5 mb-5">
                                        <div className="px-5">
                                            <Range
                                                marks={{
                                                    1: `$1`,
                                                    1000: `$1000`
                                                }}
                                                min={1}
                                                max={1000}
                                                defaultValue={[1, 1000]}
                                                tipFormatter={value => `$${value}`}
                                                tipProps={{
                                                    placement: "top",
                                                    visible: true
                                                }}
                                                value={numOfDays}
                                                onChange={numOfDays => setNumOfDays(numOfDays)}
                                            />

                                            <hr className="my-5" />

                                            {/* <div className="mt-5">
                                                <h4 className="mb-3">
                                                    Categories
                                                </h4>

                                                <ul className="pl-0">
                                                    {categories.map(category => (
                                                        <li
                                                            style={{
                                                                cursor: 'pointer',
                                                                listStyleType: 'none'
                                                            }}
                                                            key={category}
                                                            onClick={() => setCategory(category)}
                                                        >
                                                            {category}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div> */}

                                            <hr className="my-3" />

                                            <div className="mt-5">
                                                <h4 className="mb-3">
                                                    Ratings
                                                </h4>

                                                <ul className="pl-0">
                                                    {[5, 4, 3, 2, 1].map(star => (
                                                        <li
                                                            style={{
                                                                cursor: 'pointer',
                                                                listStyleType: 'none'
                                                            }}
                                                            key={star}
                                                            onClick={() => setRating(star)}
                                                        >
                                                            <div className="rating-outer">
                                                                <div className="rating-inner"
                                                                    style={{
                                                                        width: `${star * 20}%`
                                                                    }}
                                                                >
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-6 col-md-9">
                                        <div className="row">
                                            {videos.map(video => (
                                                <Video key={video._id} video={video} col={4} />
                                            ))}
                                        </div>
                                    </div>
                                </Fragment>
                            ) : (
                              videos.map(video => (
                                        <Video key={video._id} video={video} col={3} />
                                    ))
                                )}

                        </div>
                    </section>

                    {resPerPage <= count && (
                        <div className="d-flex justify-content-center mt-5">
                            <Pagination
                                activePage={currentPage}
                                itemsCountPerPage={resPerPage}
                                totalItemsCount={videosCount}
                                onChange={setCurrentPageNo}
                                nextPageText={'Next'}
                                prevPageText={'Prev'}
                                firstPageText={'First'}
                                lastPageText={'Last'}
                                itemClass="page-item"
                                linkClass="page-link"
                            />
                        </div>
                    )}

                </Fragment>
            )}

        </Fragment>
    )
}
 export default Videodisplay;