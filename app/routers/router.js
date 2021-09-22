let express = require('express');
let router = express.Router();
 
const customers = require('../controllers/controller.js');

router.post('/api/customers', customers.createCustomer);
router.get('/api/customers/:id', customers.getCustomer);
router.get('/api/customers', customers.customers);
router.put('/api/customers', customers.updateCustomer);
router.delete('/api/customers/:id', customers.deleteCustomer);

module.exports = router;