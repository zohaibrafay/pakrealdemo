
import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MDBDataTable } from 'mdbreact'

import MetaData from '../layout/MetaData'
import Loader from '../layout/Loader'
import Sidebar from './Sidebar'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
// import { getAdminProducts, deleteProduct } from '../../actions/productActions'
// import { DELETE_PRODUCT_RESET } from '../../constants/productConstants'

import {getComplain, deleteComplain, clearErrors } from '../../actions/complainActions'
import { DELETE_COMPLAIN_RESET } from '../../constants/complainConstants'
const ComplainList = ({ history }) => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, complains } = useSelector(state => state.complains);
    const { error: deleteError, isDeleted } = useSelector(state => state.complain)

    useEffect(() => {
        dispatch(getComplain());

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (deleteError) {
            alert.error(deleteError);
            dispatch(clearErrors())
        }

        if (isDeleted) {
            alert.success('Complain is deleted successfully');
            history.push('/admin/complains');
            dispatch({ type: DELETE_COMPLAIN_RESET })
        }

    }, [dispatch, alert, error, deleteError, isDeleted, history])

    const setComplains = () => {
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
                    label: 'Email',
                    field: 'email',
                    sort: 'asc'
                },
                {
                    label: 'Phone',
                    field: 'phone',
                    sort: 'asc'
                },
                {
                    label: 'Complaint',
                    field: 'complaint',
                    sort: 'asc'
                },
                {
                    label: 'Actions',
                    field: 'actions',
                },
            ],
            rows: []
        }

        complains.forEach(complain => {
            data.rows.push({
                id: complain._id,
                name: complain.name,
                email: complain.email,
                phone: complain.phone,
                complaint: complain.complaint,
                actions: <Fragment>
                    
                    <button className="btn btn-danger py-1 px-2 ml-2" onClick={() => deleteComplainHandler(complain._id)}>
                        <i className="fa fa-trash"></i>
                    </button>
                </Fragment>
            })
        })

        return data;
    }

    const deleteComplainHandler = (id) => {
        dispatch(deleteComplain(id))
    }

    return (
        <Fragment>
            <MetaData title={'All Products'} />
            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>

                <div className="col-12 col-md-10">
                    <Fragment>
                        <h1 className="my-5">All Products</h1>

                        {loading ? <Loader /> : (
                            <MDBDataTable
                                data={setComplains()}
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

export default ComplainList