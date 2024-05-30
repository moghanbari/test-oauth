import { GoogleLogin } from '@react-oauth/google';

const Login = () => {
  // same login info after successful login into state value or local storage

  const handleSuccess = (credentialResponse: any) => {
    console.log(credentialResponse.code);
  }

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={() => {
        console.log('Login Failed');
      }}
    />
  );
};

export default Login;
