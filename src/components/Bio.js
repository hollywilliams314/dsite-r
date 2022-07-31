import { Link } from 'react-router-dom'
 
const Bio = () => {
  return (
    <div>
      <h1>BIO</h1>
      <p>Danielle is a fantastic harpist and regulator and you should definately hire her</p>
    <Link to='/'>go back</Link>
    {/* <a href='/'>go back</a> */}
    </div>
  )
}

export default Bio
