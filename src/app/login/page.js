'use client';

import { useState } from 'react';
import { redirect } from 'next/navigation';

export default function Login() {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');

   const handleLogin = async (e) => {
      e.preventDefault();

      // Example credentials check
      if (username === 'admin' && password === 'password') {
         // Set authToken cookie
         document.cookie = `authToken=your-token-value; path=/; max-age=60;`; // Expires in 1 day

         // Redirect to the dashboard or another protected page
         redirect('/dashboard');
      } else {
         alert('Invalid credentials');
      }
   };

   return (
      <div>
         <h1>Login</h1>
         <form onSubmit={handleLogin}>
            <label>
               Username:
               <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
               />
            </label>
            <br />
            <label>
               Password:
               <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
               />
            </label>
            <br />
            <button type="submit">Login</button>
         </form>
      </div>
   );
}
