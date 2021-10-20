import React from 'react';
import { GoogleLogin } from 'react-google-login';
//token
import { refreshTokenSetup } from '../utils/refreshToken';

const clientId = '466243221982-l2hjhe4g7dcuq3h5ute68de36osa92su.apps.googleusercontent.com';

function Login() {
    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profileObj);
        //token
        refreshTokenSetup(res);
    };

    const onFailure = (res) => {
        console.log('[Login failed] res:', res);
    };

return (
    <div className='flex flex-col justify-center items-center'>
        <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_orgin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
        />
    </div>
);
}

export default Login;