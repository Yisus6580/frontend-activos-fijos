import { UserCreate, UserEdit } from 'src/models/user';

export const convertUserToFormData = (user: UserCreate): FormData => {
  const formData = new FormData();

  if (user.fullName) {
    formData.append('fullName', user.fullName);
  }

  if (user.email) {
    formData.append('email', user.email);
  }

  if (user.password) {
    formData.append('password', user.password);
  }

  if (user.image) {
    formData.append('image', user.image);
  }

  if (user.role) {
    formData.append('role', user.role);
  }

  return formData;
};

export const convertUserEditToFormData = (user: UserEdit): FormData => {
  const formData = new FormData();

  if (user.fullName) {
    formData.append('fullName', user.fullName);
  }

  if (user.email) {
    formData.append('email', user.email);
  }

  if (user.image) {
    formData.append('image', user.image);
  }

  if (user.role) {
    formData.append('role', user.role);
  }

  return formData;
};
