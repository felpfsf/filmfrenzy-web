import { Login } from "./Login";
import { Register } from "./Register";

interface PageProps {
  page: "register" | "login";
  title: string;
}

export const FormController = ({ page, title }: PageProps) => {
  return (
    <div className='mx-auto w-full max-w-md rounded-lg p-0 md:bg-black/50 md:p-16 md:backdrop-blur-sm'>
      <h1 className='text-3xl font-bold capitalize'>{title.toLowerCase()}</h1>
      {page === "login" && <Login />}
      {page === "register" && <Register />}
    </div>
  );
};
