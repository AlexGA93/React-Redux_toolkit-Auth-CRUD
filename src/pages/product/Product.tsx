import { Single } from '../../components';
import { singleProduct } from '../../data/data';
import './product.scss';

const Product = () => {
  return (
    <section className='product'>
        <Single {...singleProduct} />
    </section>
  )
}

export default Product