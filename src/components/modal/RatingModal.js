import React, {useState} from 'react'
import { Modal, Button } from 'antd'
import {toast} from 'react-toastify'
import {useSelector} from 'react-redux'
import { StarOutlined } from '@ant-design/icons' 
import { useNavigate, useParams } from 'react-router-dom'

const RatingModal = ({children}) => {

    const {user} = useSelector((state) => ({...state}));
    const navigate = useNavigate();
    const {slug} = useParams();

    const [modalVisible, setModalVisible] = useState(false);

    const handleModal = () => {
        if (user && user.token) {
            setModalVisible(true);
        } else {
            // navigate('/login');
            navigate('/login', {state: {from: `/product/${slug}`}});
        }
    }

  return (
    <div className=''>
        <div onClick={handleModal} className='flex space-x-2 items-center'>
            <StarOutlined className='text-red-600' /> <br /> {' '}
            <div>
                {user ? 'Leave rating' : 'Login to leave rating'}
            </div>
        </div>   
        <Modal 
            title='Leave your rating'
            centered
            visible={modalVisible}
            onOk={() => {
                setModalVisible(false)
                toast.success('Thanks for your review. It will appear soon');
            }}
            onCancel={() => setModalVisible(false)}
        >{children}</Modal>
    </div>
  )
}

export default RatingModal