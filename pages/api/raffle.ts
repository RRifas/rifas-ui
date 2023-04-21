import { Raffle } from "../../types/raffle";
import { create, fetcher, remove, update } from "../../utils/fetcher";

export const getRaffles = async () => {
  try {
    const data: Raffle[] = await fetcher(process.env.NEXT_PUBLIC_SERVER_URL);
    return data;
  } catch (e) {
    return null;
  }
};

export const getRaffleById = async (raffleId: string) => {
  try {
    const data: Raffle[] = await fetcher(process.env.NEXT_PUBLIC_SERVER_URL);
    return data.find(({ id }) => String(id) === raffleId) || null;
  } catch (e) {
    return null;
  }
};

export const createRaffle = async (raffle: Raffle) => {
  try {
    return await create(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/create`,
      raffle
    );
  } catch (e) {
    return null;
  }
};

export const updateRaffle = async (raffle: Raffle) => {
  try {
    return await update(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/update/${raffle.id}`,
      raffle
    );
  } catch (e) {
    return null;
  }
};

export const deleteRaffle = async (raffleId: string) => {
  try {
    return await remove(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/delete/${raffleId}`
    );
  } catch (e) {
    return null;
  }
};
