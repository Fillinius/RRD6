import { Navigate, useParams, useNavigate, NavLink, } from 'react-router-dom';

const users = [
  { id: 0, name: 'user 0' },
  { id: 1, name: 'user 1' },
  { id: 2, name: 'user 2' }
]

const Home = () => {
  return <h1>Home Page</h1>
}

const UserPage = () => {
  const { userId, edit } = useParams()
  const getUser = (userId) => users.find((u) => u.id.toString() === userId)
  const user = getUser(userId)
  return (
    <>
      <h1>User Layout</h1>
      <NavLink to='/' >Main Page</NavLink>

      {userId
        ? (edit
          ? <EditThisPage id={userId} />
          : <UserListPage user={user} id={userId} />)
        : <>
          <h1>User List Page</h1>
          {users.map((user) => (<ul key={user.id}><li><NavLink to={`/users/${user.id}`} ><p >{user.name}</p></NavLink></li></ul>))}
        </>}
    </>
  )
}

const EditThisPage = ({ id }) => {
  return (<>
    <h1>Edit User Page</h1>
    <ul>
      <li><NavLink to={`/users/${id}`}>User profile Page</NavLink></li>
      <li><NavLink to={`/users/${+id + 1}`}>AnotherUser</NavLink></li>
      <li><NavLink to={`/users`}>Users list page</NavLink></li>
    </ul>
  </>)
}
const UserListPage = ({ id, user }) => {
  const navigate = useNavigate()
  if (!user) return navigate('/users', { replace: true })
  return (<>
    <h1>UserPage</h1>
    <ul>
      <li><NavLink to='/users/' >User List Page</NavLink></li>
      <li><NavLink to={`/users/${id}/edit`}>Edit this page</NavLink></li>
    </ul>
    <p> {user.name} -id: {id}</p>
  </>)
}

const routes = [
  {
    path: '', element: <Home />
  },
  {
    path: 'users/:userId?/:edit?', element: <UserPage />
  },
  {
    path: '*', element: <Navigate from='*' to='/ ' />
  }
]

export default routes