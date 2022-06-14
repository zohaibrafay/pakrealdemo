import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MDBDataTable } from 'mdbreact'

import MetaData from '../layout/MetaData'
import Loader from '../layout/Loader'
import Sidebar from './Sidebar'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { getAdminPacks, deletePack, clearErrors } from '../../actions/packageActions'
import { DELETE_PACK_RESET } from '../../constants/packageConstants'

const PackagesList = ({ history }) => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, packs } = useSelector(state => state.packs);
    const { error: deleteError, isDeleted } = useSelector(state => state.pack)

    useEffect(() => {
        dispatch(getAdminPacks());

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (deleteError) {
            alert.error(deleteError);
            dispatch(clearErrors())
        }

        if (isDeleted) {
            alert.success('Package deleted successfully');
            history.push('/admin/packs');
            dispatch({ type: DELETE_PACK_RESET })
        }

    }, [dispatch, alert, error, deleteError, isDeleted, history])

    const setPacks = () => {
        const data = {
            columns: [
                {
                    label: 'ID',
                    field: 'id',
                    sort: 'asc'
                },
                {
                    label: 'No of Marla',
                    field: 'marla',
                    sort: 'asc'
                },
                {
                    label: 'Estimated square Foot',
                    field: 'squarefoot',
                    sort: 'asc'
                },
                {
                    label: 'Total Price',
                    field: 'price',
                    sort: 'asc'
                },
                {
                    label: 'Actions',
                    field: 'actions',
                },
            ],
            rows: []
        }

        packs.forEach(pack => {
            data.rows.push({
                id: pack._id,
                marla: pack.numberofmarla,
                squarefoot: pack.estimatedsquarefoot,
                price: `$${pack.totalprice}`,
                actions: <Fragment>
                    <Link to={`/admin/pack/${pack._id}`} className="btn btn-primary py-1 px-2">
                        <i className="fa fa-pencil"></i>
                    </Link>
                    <button className="btn btn-danger py-1 px-2 ml-2" onClick={() => deletePackHandler(pack._id)}>
                        <i className="fa fa-trash"></i>
                    </button>
                </Fragment>
            })
        })

        return data;
    }

    const deletePackHandler = (id) => {
        dispatch(deletePack(id))
    }

    return (
        <Fragment>
            <MetaData title={'All Pack'} />
            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>

                <div className="col-12 col-md-10">
                    <Fragment>
                        <h1 className="my-5">All Packs</h1>

                        {loading ? <Loader /> : (
                            <MDBDataTable
                                data={setPacks()}
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

export default PackagesList