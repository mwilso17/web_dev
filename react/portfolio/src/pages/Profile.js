import { useState, useEffect } from 'react';
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
          <ul>
            <li>
              <span>GitHub: </span>
              <Link url={"https://github.com/mwilso17"}
              title={"https://github.com/mwilso17"} />
            </li>
            <li>
              <span>Python Repo: </span>
              <Link url={"https://github.com/mwilso17/python"}
              title={"https://github.com/mwilso17/python"} />
            </li>
            <li><span>name: </span>
              {"Michael Wilson"}</li>
            <li><span>email: </span>
              {"michaelbobby235@gmail.com"}</li>
          </ul>
        </div>
      )}
    </div>
   );
 }

 export default Profile;