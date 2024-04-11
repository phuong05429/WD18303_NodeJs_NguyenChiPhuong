const ProductController =  require('../controllers/admin/ProductController');

const router = express.router();

router.get('', ProductController.getProducts);

router.post('', ProductController.getProducts);
