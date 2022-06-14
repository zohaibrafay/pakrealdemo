const express = require('express')
const router = express.Router();


const {
    getPacks,
    getAdminPacks,
    newPack,
    getSinglePack,
    updatePack,
    deletePack,
    createPackReview,
    getPackReviews,
    deleteReview

} = require('../controllers/packageController')

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');


router.route('/packs').get(getPacks);
router.route('/admin/packs').get(getAdminPacks);
router.route('/pack/:id').get(getSinglePack);

router.route('/admin/pack/new').post(isAuthenticatedUser, authorizeRoles('admin'), newPack);

router.route('/admin/pack/:id')
    .put(isAuthenticatedUser, authorizeRoles('admin'), updatePack)
    .delete(isAuthenticatedUser, authorizeRoles('admin'), deletePack);


router.route('/review').put(isAuthenticatedUser, createPackReview)
router.route('/reviews').get(isAuthenticatedUser, getPackReviews)
router.route('/reviews').delete(isAuthenticatedUser, deleteReview)

module.exports = router;