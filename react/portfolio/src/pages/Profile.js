import { useState, useEffect } from 'react';
import List from '../components/List';
import Link from '../components/Link';
import './Profile.css';

 function Profile({ userName }) {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({});
  useEffect(() => {
    async function fetchData() {
      const profile = await fetch(
        'https://api.github.com/users/${mwilso17}');
      const result = await profile.json();
      if (result) {
        setProfile(result);
        setLoading(false);
      }
    }
    fetchData();
  }, [userName]);

const items = [
  {
    field: 'html_url',
    value: <Link url={profile.html_url} 
              title={profile.html_url} />,
          },
          {
            field: 'repos_url',
            value: <Link url={profile.repos_url}
              title={profile.repos_url} />,
          },
          { field: 'name', value: profile.name },
          { field: 'company', value: profile.company },
          { field: 'location', value: profile.location },
          { field: 'email', value: profile.email },
          { field: 'bio', value: profile.bio },
        ];
  return (
    <div className='Profile-container'>
      <h2>About me</h2>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <div>
            <img
              className='Profile-avatar'
              src={"https://avatars.githubusercontent.com/u/80751274?v=4"}
              alt={profile.name}
            />
          <List items={items} />
        </div>
      )}
    </div>
   );
 }

 export default Profile;