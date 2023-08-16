import { SignUp } from "@clerk/nextjs";
const SignUpPage = () => {
  return (
    <>
      <div className="flex items-center justify-center h-[100vh] w-full py-28">
        <SignUp />
      </div>
    </>
  );
};

export default SignUpPage;
