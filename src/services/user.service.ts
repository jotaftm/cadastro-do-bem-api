import { getRepository } from "typeorm";
import { User, Address } from "../entities";
import { GenericError } from "../errors/genericError";

interface BodyCreateUser {
  primaryName: string;
  lastName: string;
  email: string;
  cpf: string;
  birthDate: string;
  password: string;
  address: Address;
}

interface BodyUpdateUser {
  confirmed: boolean;
}

export const createUser = async (body: BodyCreateUser) => {
  try {
    const userRepository = getRepository(User);
    const addressRepository = getRepository(Address);

    const { address, ...dataUser } = body;

    const newUser = userRepository.create({
      ...dataUser,
    });

    const user = await userRepository.save(newUser);

    const newAddress = addressRepository.create({
      ...address,
      user: user,
    });

    await addressRepository.save(newAddress);

    return await userRepository.findOne(user.uuid);
  } catch (err) {
    throw new GenericError((err as any).detail, 400);
  }
};

export const updateUser = async (userId: string, body: BodyUpdateUser) => {
  const userRepository = getRepository(User);

  const user = await userRepository.findOne(userId);

  if (!user) {
    throw new GenericError("user not found", 404);
  }

  await userRepository.update(user.uuid, { confirmed: body.confirmed });

  return await userRepository.findOne(userId);
};
