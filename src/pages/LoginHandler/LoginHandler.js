import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';
import api from '../../api/api'

const LoginHandeler = () => {
  const navigate = useNavigate();
  let params = new URL(window.location.href).searchParams;
  let access_token = params.get('accessToken');
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');
  const [loading, setLoading] = useState(true);

  console.log('access_token: ', access_token);
  localStorage.setItem('access_token', access_token);

  useEffect(() => {
    const fetchData = async () => {
      if (access_token) {
        try {
          const response = await axios.get(`${api.baseUrl}/user/validate`, {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          });

          console.log('Backend response:', response.data);
          const { username, role } = response.data;
          setUsername(username);
          setRole(role);
          setLoading(false);
          // 성공적으로 백엔드에 데이터를 보낸 후 처리할 작업
          // navigate("/MainPage");
        } catch (error) {
          console.error('Error sending data to backend:', error);
          // 오류 처리
        }
      }
    };

    fetchData();
  }, [access_token]);

  // role에 따른 페이지 이동 함수
  const handleRoleRedirect = () => {
    switch (role) {
      case 'ROLE_GUEST':
        navigate('/ProfileEdit');
        break;
      case 'ROLE_USER':
        navigate('/MainPage');
        break;
      default:
        navigate('/LoginHandler');
    }
  };

  useEffect(() => {
    // role 상태가 변경될 때마다 페이지 이동 처리
    if (!loading && role) {
      handleRoleRedirect();
    }
  }, [loading, role]);

  return (
    <div className="LoginHandeler">
      <div className="JustifyCenter">
        <p>로그인 중입니다.</p>
        <p>잠시만 기다려주세요.</p>
      </div>
    </div>
  );
};

export default LoginHandeler;
