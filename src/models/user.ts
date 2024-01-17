export interface User {
  _id: string;
  fullName: string;
  userName: string;
  email: string;
  password?: string;
  role: rols;
  image?: userImage;
  token: string;
  verifyToken: string;
  createdAt: Date;
  updatedAt: Date;
}

type rols = 'admin' | 'grosser' | null;

export type userImage = {
  publicId: string;
  url: string;
};

export interface SessionData {
  userId: string;
  email: string;
  fullName: string;
  imageUrl?: string;
  role: string;
  token: string;
}

export interface Credentials {
  email: string;
  password: string;
}

export interface UserCreate {
  fullName: string;
  email: string;
  password: string;
  role: rols;
  image?: string;
}

export interface UserEdit {
  fullName: string;
  email: string;
  role: rols;
  image?: string;
}
