import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function withAuth(Component) {
  return function ProtectedRoute({ ...props }) {
    const router = useRouter();
    const route = router.asPath;
    
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        const userIsAuthenticated = user !== null;
      if (!userIsAuthenticated) {
        router.push('/signIn');
      }
      else if (route === '/takerPage') {
        user.userType === 'Donator' ? router.push('/signIn') :null;}
        else if (route === '/giverPage') {
            user.userType === 'Charity'||user.userType === 'Factory' ? router.push('/signIn') :null;}
    }, [ router]);

    return <Component {...props} />;
  };
}