'use server';

import { getPortfolioData, updatePortfolioData, PortfolioData } from '@/lib/data';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login(formData: FormData) {
  const password = formData.get('password') as string;
  // Simple hardcoded password for demonstration
  if (password === 'Password@2026') {
    (await cookies()).set('admin_session', 'true', { httpOnly: true });
    redirect('/admin');
  } else {
    return { error: 'Invalid password' };
  }
}

export async function logout() {
  (await cookies()).delete('admin_session');
  redirect('/admin/login');
}

export async function updateProfile(prevState: any, formData: FormData) {
  try {
      console.log('updateProfile called');
      const currentData = await getPortfolioData();
      
      const newProfile = {
        ...currentData.profile,
        name: formData.get('name') as string,
        role: formData.get('role') as string,
        email: formData.get('email') as string,
        location: formData.get('location') as string,
        avatar: formData.get('avatar') as string,
        cvLink: formData.get('cvLink') as string,
        social: {
          facebook: formData.get('facebook') as string,
          twitter: formData.get('twitter') as string,
          linkedin: formData.get('linkedin') as string,
          github: formData.get('github') as string,
        }
      };

      console.log('Updating profile with data:', JSON.stringify(newProfile, null, 2));
      currentData.profile = newProfile;
      const result = await updatePortfolioData(currentData);
      console.log('Update result:', result);

      if (result.success) {
        revalidatePath('/');
        revalidatePath('/admin');
        return { message: 'Profile updated successfully!', success: true };
      } else {
        console.error('Update failed with error:', result.error);
        return { message: `Failed to update profile: ${result.error}`, success: false };
      }
  } catch (e) {
      console.error('Unexpected error in updateProfile:', e);
      return { message: `Unexpected error: ${String(e)}`, success: false };
  }
}

export async function saveResume(data: any) {
    const currentData = await getPortfolioData();
    currentData.resume = data;
    const result = await updatePortfolioData(currentData);
    
    if (result.success) {
        revalidatePath('/resume');
        revalidatePath('/admin');
        return { success: true };
    }
    return { success: false, error: result.error };
}

export async function saveProjects(data: any) {
    const currentData = await getPortfolioData();
    currentData.projects = data;
    const result = await updatePortfolioData(currentData);
    
    if (result.success) {
        revalidatePath('/portfolio');
        revalidatePath('/admin');
        return { success: true };
    }
    return { success: false, error: result.error };
}

export async function saveCertifications(data: any) {
    const currentData = await getPortfolioData();
    currentData.certifications = data;
    const result = await updatePortfolioData(currentData);
    
    if (result.success) {
        revalidatePath('/portfolio');
        revalidatePath('/admin');
        return { success: true };
    }
    return { success: false, error: result.error };
}

export async function saveBlog(data: any) {
    const currentData = await getPortfolioData();
    currentData.blog = data;
    const result = await updatePortfolioData(currentData);
    
    if (result.success) {
        revalidatePath('/blog');
        revalidatePath('/admin');
        return { success: true };
    }
    return { success: false, error: result.error };
}
