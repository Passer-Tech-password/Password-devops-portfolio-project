'use client';

import { useState } from 'react';

interface JsonEditorFormProps {
  title: string;
  data: any;
  action: (data: any) => Promise<{ success: boolean }>;
}

export default function JsonEditorForm({ title, data, action }: JsonEditorFormProps) {
  const [jsonString, setJsonString] = useState(JSON.stringify(data, null, 2));
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setIsPending(true);

    try {
      const parsedData = JSON.parse(jsonString);
      const result = await action(parsedData);
      if (result.success) {
        setSuccess(true);
      } else {
        setError('Failed to save data.');
      }
    } catch (err) {
      setError('Invalid JSON format. Please check your syntax.');
    } finally {
      setIsPending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-[#2b2b2c] p-6 rounded-2xl border border-[#383838]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <span className="text-xs text-gray-500 bg-[#1e1e1f] px-2 py-1 rounded">JSON Editor</span>
      </div>
      
      <p className="text-sm text-gray-400 mb-4">
        Edit the content below carefully. Maintain the JSON structure.
      </p>

      <div className="relative">
        <textarea 
            value={jsonString}
            onChange={(e) => setJsonString(e.target.value)}
            rows={15}
            className="w-full bg-[#1e1e1f] border border-[#383838] rounded-xl px-4 py-4 text-gray-300 font-mono text-sm focus:outline-none focus:border-blue-500 transition-colors resize-y"
        ></textarea>
      </div>

      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}
      
      {success && (
        <p className="text-green-500 text-sm">Saved successfully!</p>
      )}

      <button 
        type="submit" 
        disabled={isPending}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl transition-colors disabled:opacity-50"
      >
        {isPending ? 'Saving...' : 'Save Changes'}
      </button>
    </form>
  );
}
