import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} 
      onClick = {onAdd} />
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// You can style stuff inline with variables if you wanted to
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black'
// }

export default Header