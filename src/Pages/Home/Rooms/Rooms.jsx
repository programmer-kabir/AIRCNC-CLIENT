import React, { useEffect, useState } from 'react';
import Container from '../../../Component/FixedStyle/Container';
import Card from './Card';
import Spinner from '../../../Component/Spinner/Spinner';
import { useSearchParams } from 'react-router-dom';
import Heading from './Heading';

const Rooms = () => {
    const [rooms, setRooms] = useState([])
    const [loading, setLoading] = useState('')

    const [params, setParams] = useSearchParams()
    const category = params.get('category')
    useEffect(()=>{
        setLoading(true)
        fetch('./Rooms.json')
        .then(res =>res.json())
        .then(data =>{
            if(category){
                const filtered = data.filter(room => room.category === category)
                setRooms(filtered)
            }
            else{
                setRooms(data)
            }
            setLoading(false)
        })
        .catch(err =>console.log(err))
    },[category])
    if(loading){
        return <Spinner />
    }
    return (
        <Container>
            {rooms && rooms.length > 0 ? <div className='pt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6'>
            {rooms.map((room, index) => (
            <Card key={index} room={room} />
          ))}
            </div> : <div className='pt-12'>
                <Heading subtitle='please select other category'
                title='No Rooms available in this Category'
                center={true}
                />
                </div>}
        </Container>
    );
};

export default Rooms;