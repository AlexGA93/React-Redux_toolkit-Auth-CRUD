import './topBox.scss';
import { topDealUsers } from '../../data/data';
import { topDealUserType } from '../../types/types';

const TopBox = () => {
  return (
    <section className='topBox'>
        <h1>Top Deals</h1>
        <div className="list">
        {
          topDealUsers.map((topDealUser: topDealUserType) => (
            <div className="listItem" key={topDealUser.id}>
              <div className="user">
                <img src={topDealUser.img} alt={`user_img_${topDealUser.id}`} />
                <div className="userTexts">
                  <span className='username'>{topDealUser.username}</span>
                  <span className='email'>{topDealUser.email}</span>
                </div>
              </div>
              <span className='amount'>${topDealUser.amount}</span>
            </div>
          ))
        }
        </div>
    </section>
  )
}

export default TopBox