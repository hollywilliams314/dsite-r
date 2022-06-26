import PropTypes from 'prop-types'

const Menu = ({ onClick }) => {

  return (
    <div>
        <button 
        onClick={onClick} 
        className='btn'>Menu</button>
    </div>
  )
}

Menu.propTypes = {
    onClick: PropTypes.func,
}

export default Menu
