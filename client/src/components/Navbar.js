import {Link} from 'react-router-dom'
import SignUp from '../pages/Public'
import Login from '../pages/Login'

function Navbar() {
    <nav>
        <Link to ="/sign-up" element={<SignUp/>}>Dashboard</Link>
        <Link to = "/login" element={<Login/>}>  Profile </Link>
    </nav>
}

export default Navbar