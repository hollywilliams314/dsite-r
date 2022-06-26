import Menu from './Menu'

const Header = () => {
    const onClick = () => {}
  return (
    <header className='header'>
      <h1>Danielle Williams</h1>
      <Menu onClick={onClick}/>
    </header>
  )
}

export default Header
