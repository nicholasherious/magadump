import { useRouter } from 'next/router';
import { useState } from 'react';
import UserProfile from '../../components/profile/UserProfile';
import fetchUser from '../../lib/fetcher';
import useSWR from 'swr';

const fetcher = url => axios.get(url).then(res => res.data);

const ProfilePage = () => {
  const [profileData, setProfileData] = useState();
  const router = useRouter();
  const { user } = router.query;

  fetchUser
    .get(`http://localhost:3001/api/auth/user/${user}`)
    .then(response => {
      console.log(response.data);
      setProfileData(response.data);
    });

  if (!profileData) {
    return <div>Loading...</div>;
  }
  console.log(profileData);

  return (
    <div>
      <UserProfile user={profileData} />
    </div>
  );
};

export default ProfilePage;
