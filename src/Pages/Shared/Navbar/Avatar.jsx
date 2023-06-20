import useAuth from '../../../Component/Hooks/useAuth'
import avatarImg from '../../../assets/Image/placeholder.jpg'


const Avatar = () => {
  const { user } = useAuth()
  return (
    <img
      className='rounded-full'
      src={user && user.photoURL ? user.photoURL : avatarImg}
      alt='profile'
      height='30'
      width='30'
    />
  )
}

export default Avatar