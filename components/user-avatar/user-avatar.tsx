"use client";
import { AvatarProps } from "@radix-ui/react-avatar";
import { User } from "next-auth";
import { Avatar, AvatarFallback, AvatarImage } from "../UI/avatar";

interface Props extends AvatarProps {
  user: Pick<User, "image" | "name">;
}

const UserAvatar = ({ user, ...props }: Props) => {
  return (
    <Avatar>
      {user?.image ? (
        <AvatarImage alt='Picture' src={user.image} />
      ) : (
        <AvatarFallback className='border'>
          <span>{user?.name}</span>
        </AvatarFallback>
      )}
    </Avatar>
  );
};

export default UserAvatar;
