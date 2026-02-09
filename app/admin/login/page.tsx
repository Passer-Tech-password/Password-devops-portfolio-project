'use client';

import { login } from '@/app/actions';
import { useActionState } from 'react';

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(async (prevState: any, formData: FormData) => {
    return await login(formData);
  }, null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1e1e1f] text-white">
      <div className="bg-[#2b2b2c] p-8 rounded-2xl shadow-xl w-full max-w-md border border-[#383838]">
        <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
        
        <form action={formAction} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Password</label>
            <input 
              type="password" 
              name="password" 
              required
              className="w-full bg-[#1e1e1f] border border-[#383838] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Enter password"
            />
          </div>
          
          {state?.error && (
            <p className="text-red-500 text-sm text-center">{state.error}</p>
          )}

          <button 
            type="submit" 
            disabled={isPending}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl transition-colors disabled:opacity-50"
          >
            {isPending ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}
