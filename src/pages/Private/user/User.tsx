import { Single } from '../../../components';
import { singleUser } from '../../../data/data';
import './user.scss';

const User = () => {
  return (
    <section className='user'>
      <Single {...singleUser}/>
    </section>
  )
}

export default User