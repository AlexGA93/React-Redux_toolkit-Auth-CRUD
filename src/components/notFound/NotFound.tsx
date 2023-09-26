import media from '../../assets/media/glitch.mp4';

const NotFound = () => {
  return (
    <div className='notFoundContainer'>
      <div className="notFoundContainer__message">
        <h1 className='notFoundContainer__title'>404</h1>
        <p className='notFoundContainer__subtitle'>Page Not Found </p>
        <p className='notFoundContainer__icon'>(⁠ノ⁠ಠ⁠益⁠ಠ⁠)⁠ノ⁠彡⁠┻⁠━⁠┻</p>
      </div>
      <video className='notFoundContainer__videoTag' autoPlay loop muted>
        <source src={media} type='video/mp4' />
    </video>
    </div>
  )
}
export default NotFound