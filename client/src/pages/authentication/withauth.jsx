// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const withAuth = (WrappedComponent) => (props) => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     firebase.auth().onAuthStateChanged((user) => {
//       if (!user) {
//         navigate('/login');
//       }
//     });
//   }, [navigate]);

//   return <WrappedComponent {...props} />;
// };

// export default withAuth;
