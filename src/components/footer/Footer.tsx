import './footer.scss';

const Footer = (): JSX.Element => {
  return (
    <footer className='footer'>
      {/* first child */}
      <span>Admin Page</span>
      {/* second (or last) child */}
      <span>© Alejandro Gimeno Admin Page</span>
    </footer>
  )
}

export default Footer