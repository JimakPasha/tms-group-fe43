import { PageTemplate } from "./components/PageTemplate/PageTemplate";
// import { RegistrationConfirm } from "./pages/RegistrationConfirm/RegistrationConfirm";
import { SignUp } from "./pages/SignUp/SignUp";

export const App = () => {


  return (
    <>
      <PageTemplate>
        <SignUp/>
        {/* <RegistrationConfirm /> */}
      </PageTemplate>
    </>
  );
}
