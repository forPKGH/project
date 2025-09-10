import { supabase } from "../supabaseClient";

const signUpWithProfile = async (email, password, name, surname, patronymic, avatarFile) => {
  const { data: { user }, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw error;

  let avatarUrl = null;
  if (avatarFile) {
    const { data: storageData, error: storageError } = await supabase
      .storage
      .from('avatars')
      .upload(`${user.id}/${avatarFile.name}`, avatarFile);

    if (storageError) throw storageError;

    const { data: publicUrlData } = supabase
      .storage
      .from('avatars')
      .getPublicUrl(`${user.id}/${avatarFile.name}`);

    avatarUrl = publicUrlData.publicUrl;
  }

  const { error: insertError } = await supabase
    .from('profiles')
    .insert([{
      id: user.id,
      name,
      surname,
      patronymic,
      avatar_url: avatarUrl,
    }])

  if (insertError) throw insertError;

  return { user, avatarUrl };
}

export default signUpWithProfile;