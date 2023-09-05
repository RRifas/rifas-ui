import { User } from "../types/user";
import { create, fetcher } from "../utils/fetcher";

export const getUser = async () => {
  try {
    const data: User = await fetcher(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/profile`
    );
    return data;
  } catch (e) {
    return null;
  }
};

export const createUser = async (user: User) => {
  try {
    return await create(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/register`,
      user
    );
  } catch (e) {
    return null;
  }
};

export const loginUser = async (user: User) => {
  try {
    return await create(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/login`,
      user
    );
  } catch (e) {
    return null;
  }
};
