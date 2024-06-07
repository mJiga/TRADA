import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('')

  const navigation = useNavigate();

  const { signUp } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword){
      setError('Passwords do not match');
      console.error(error);
      return;
    }

    // add error handling

    setLoading(true);
    setError('');

    try {
      await signUp(email, password);
      console.log('Redirecting to home page');
      navigation('/home');
    } catch(err){
      setError('Unable to create account');
      console.error(error);
    }
      setLoading(false);
  };
  
  return (
    <div className="bg-black min-h-screen font-Poppins text-white flex flex-col flex-auto items-center shadow-lg text-center bg-cover bg-center">
        <header className='font-bold text-2xl p-6 '>
            <Link to='/'>TRADA</Link>
        </header>

        
        {error && <h1>{error}</h1>}
        <h1>Create Account</h1>

        <form onSubmit={handleSubmit}>
          <input
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='text-black'
            required
          />
          <input
            placeholder='Password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='text-black'
            required
          />
          <input
            placeholder='Confirm password'
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className='text-black'
            required
          />
          <button
            type='submit'
            disabled={loading}
          >
            Sign up
          </button>
        </form>

        <span>Already have an account?</span>
        <Link to='/signin'>Sign in</Link>
    </div>
  )
}

export default SignUp;