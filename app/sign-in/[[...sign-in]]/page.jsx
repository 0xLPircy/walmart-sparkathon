import { SignIn } from "@clerk/nextjs";
const SignInPage = () => {
  return (
    <>
      <div className="flex items-center justify-center h-[100vh] w-full">
        <SignIn />
      </div>
    </>
  );
};

export default SignInPage;
