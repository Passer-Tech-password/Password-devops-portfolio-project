'use client';

import { updateProfile } from '@/app/actions';
import { useActionState } from 'react';
import { PortfolioData } from '@/lib/data';

export default function ProfileForm({ data }: { data: PortfolioData['profile'] }) {
  const [state, formAction, isPending] = useActionState(updateProfile, null);

  return (
    <form action={formAction} className="space-y-6 bg-[#2b2b2c] p-6 rounded-2xl border border-[#383838]">
      <h2 className="text-xl font-bold text-white mb-4">Edit Profile</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm text-gray-400">Full Name</label>
          <input type="text" name="name" defaultValue={data.name} className="w-full bg-[#1e1e1f] border border-[#383838] rounded-xl px-4 py-2 text-white" />
        </div>
        <div className="space-y-2">
          <label className="text-sm text-gray-400">Role / Title</label>
          <input type="text" name="role" defaultValue={data.role} className="w-full bg-[#1e1e1f] border border-[#383838] rounded-xl px-4 py-2 text-white" />
        </div>
        <div className="space-y-2">
          <label className="text-sm text-gray-400">Email</label>
          <input type="email" name="email" defaultValue={data.email} className="w-full bg-[#1e1e1f] border border-[#383838] rounded-xl px-4 py-2 text-white" />
        </div>
        <div className="space-y-2">
          <label className="text-sm text-gray-400">Location</label>
          <input type="text" name="location" defaultValue={data.location} className="w-full bg-[#1e1e1f] border border-[#383838] rounded-xl px-4 py-2 text-white" />
        </div>
        <div className="space-y-2">
          <label className="text-sm text-gray-400">Avatar URL</label>
          <input type="text" name="avatar" defaultValue={data.avatar} className="w-full bg-[#1e1e1f] border border-[#383838] rounded-xl px-4 py-2 text-white" />
        </div>
        <div className="space-y-2">
          <label className="text-sm text-gray-400">CV Link</label>
          <input type="text" name="cvLink" defaultValue={data.cvLink} className="w-full bg-[#1e1e1f] border border-[#383838] rounded-xl px-4 py-2 text-white" />
        </div>
      </div>

      <div className="space-y-4 pt-4 border-t border-[#383838]">
        <h3 className="text-lg font-medium text-white">Social Links</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
                <label className="text-sm text-gray-400">Facebook URL</label>
                <input type="text" name="facebook" defaultValue={data.social.facebook} className="w-full bg-[#1e1e1f] border border-[#383838] rounded-xl px-4 py-2 text-white" />
            </div>
            <div className="space-y-2">
                <label className="text-sm text-gray-400">Twitter (X) URL</label>
                <input type="text" name="twitter" defaultValue={data.social.twitter} className="w-full bg-[#1e1e1f] border border-[#383838] rounded-xl px-4 py-2 text-white" />
            </div>
            <div className="space-y-2">
                <label className="text-sm text-gray-400">LinkedIn URL</label>
                <input type="text" name="linkedin" defaultValue={data.social.linkedin} className="w-full bg-[#1e1e1f] border border-[#383838] rounded-xl px-4 py-2 text-white" />
            </div>
            <div className="space-y-2">
                <label className="text-sm text-gray-400">GitHub URL</label>
                <input type="text" name="github" defaultValue={data.social.github} className="w-full bg-[#1e1e1f] border border-[#383838] rounded-xl px-4 py-2 text-white" />
            </div>
        </div>
      </div>

      {state?.message && (
        <p className={`text-sm ${state.success ? 'text-green-500' : 'text-red-500'}`}>{state.message}</p>
      )}

      <button type="submit" disabled={isPending} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl transition-colors disabled:opacity-50">
        {isPending ? 'Saving...' : 'Save Profile'}
      </button>
    </form>
  );
}
