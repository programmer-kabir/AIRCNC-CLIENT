import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../Component/Hooks/useAuth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'
import SocialLogin from '../SocialLogin/SocialLogin';
import { ImSpinner9 } from 'react-icons/im';
import { toast } from 'react-hot-toast';

const Register = () => {
    const {loading,newRegister,updateUserProfile} = useAuth();
    const navigate = useNavigate()
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGUPLOADKEY}`
    // console.log(url);
   

    const onSubmit =(data)=>{
        // console.log(data);

        if(data.password !== data.confirmPassword){
          toast.error("password don't match")
      }
        const image = data.image[0]
        // console.log(image);
        const formData = new FormData
        formData.append('image', image)
        fetch(url,{
          method:'POST',
          body:formData})
        .then(res =>res.json())
        .then(imageResponse =>{
          // console.log(imageResponse.data.display_url)
          const photo = imageResponse.data.display_url
          newRegister(data.email , data.password)
        .then(result =>{
            // console.log(result.user);
            updateUserProfile(data.displayName , photo)
            
            .then({})
            .catch(err =>{
                toast(err.message)
            })
            navigate('/')
        })
        .catch(err =>{
            toast.error(err.message)
        })
        })
        // const photo = imageResponse.data.display_url
        
        
    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
          <p className='text-sm text-gray-400'>Welcome to AirCNC</p>
        </div>
        <form
        onSubmit={handleSubmit(onSubmit)}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                {...register('name', { required: true })}
                placeholder='Enter Your Name Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
              {errors.name && <p className='text-xs font-semibold text-red-500'>This name is required.</p>}
            </div>
            <div>
              <label htmlFor='image' className='block mb-2 text-sm'>
                Select Image:
              </label>
              <input
                
                type='file'
                id='image'
                name='image'
                {...register('image')}
                accept='image/*'
              />
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                {...register('email', { required: true })}
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
              {errors.email && <p className='text-xs font-semibold text-red-500'>This Email Field is required.</p>}
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password
                </label>
              </div>
              <input
                type='password'
                name='password'
                id='password'
                {...register('password', { required: true })}
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
              />
              {errors.password && <p className='text-xs font-semibold text-red-500'>This password Field is required.</p>}
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password
                </label>
              </div>
              <input
                type='password'
                name='confirmPassword'
                id='confirmPassword'
                {...register('confirmPassword', { required: true })}
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
              />
              {errors.confirmPassword && <p className='text-xs font-semibold text-red-500'>This confirm-Password Field is required.</p>}
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='bg-rose-500 w-full rounded-md py-3 text-white'
            >
              {loading ? <ImSpinner9 className='m-auto animate-spin' size={24} />:"Continue"}
            </button>
          </div>
        </form>
<SocialLogin></SocialLogin>
        <p className='px-6 text-sm text-center text-gray-400'>
          Already have an account?{' '}
          <Link
            to='/login'
            className='hover:underline hover:text-rose-500 text-gray-600'
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
    );
};

export default Register;