const { getComplain,newComplain ,deleteComplain} = require("../controllers/complainController");
const router = require("express").Router();


router.get('/admin/allComplain',getComplain);
router.post('/newComplain',newComplain)
router.delete('/delete/:id',deleteComplain)
module.exports = router;
