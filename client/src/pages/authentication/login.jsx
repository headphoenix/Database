// import React, { useState, useContext } from 'react';
// import { AuthenticationContext } from 'context/authentication/authentication.context';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { onLogin, error, isLoading, isAuthenticated } = useContext(AuthenticationContext);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await onLogin(email, password)
//       // redirect to dashboard or display a success message
//     } catch (err) {
//       console.log(error)
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button type="submit" >Login</button>
//       {error && <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />}
//       {isAuthenticated && <p>Hurrraayayyyyyy</p>}
//     </form>
//   );
// };

// export default Login;
