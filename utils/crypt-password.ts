import crypto from "crypto";

interface PasswordProps {
  candidatePassword: string;
  hash: string;
  salt: string;
}

interface HashedPassword {
  hash: string;
  salt: string;
}

export const verifyPassword = ({ candidatePassword, hash, salt }: PasswordProps) => {
  const candidateHash = crypto
    .pbkdf2Sync(candidatePassword, salt, 1000, 64, "sha512")
    .toString("hex");

  const result = candidateHash === hash;

  return result;
};

export const hashPassword = (password: string): HashedPassword => {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "sha512")
    .toString("hex");
  return { hash, salt };
};
