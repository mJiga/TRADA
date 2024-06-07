import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('')
  
  const navigation = useNavigate();

  const { signIn, googleSignIn } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // repurpose to compare with database password
    // if (password !== confirmPassword){
    //   setError('Passwords do not match');
    //   return;
    // }

    setLoading(true);
    setError('');

    try {
      await signIn(email, password);
      setLoading(false);
      navigation('/home');
    } catch(err){
      setError('Unable to sign in');
      console.error(error);
    }
    setLoading(false);
  };
  
  const handleGoogleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError('');

    try {
      await googleSignIn();
      setLoading(false);
      navigation('/home');
    } catch(err){
      setError('Unable to sign in with Google');
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
        <h1>Sign in</h1>

          <button
              onClick={handleGoogleSubmit}
              disabled={loading}
            >
              Continue with Google
          </button>

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

          <span>
            Need an account?
          </span>
          <Link to='/signup'>Create account</Link>

          <button
            type='submit'
            disabled={loading}
          >
            Sign in
          </button>
        </form>
    </div>
  )
}

export default SignIn;