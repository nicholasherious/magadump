import { useRouter } from 'next/router';
import UserProfile from '../../components/profile/UserProfile';

const ProfilePage = () => {
  const router = useRouter();
  const { user } = router.query;

  return (
    <div>
      <UserProfile user={user} />
    </div>
  );
};

export default ProfilePage;
