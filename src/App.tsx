import { PageTemplate } from "./components/PageTemplate/PageTemplate";
import { SignInPage } from "./pages/SignInPage/SignInPage";

export const App = () => {


  return (
    <>
      <PageTemplate>
        <SignInPage />
      </PageTemplate>
    </>
  );
}
