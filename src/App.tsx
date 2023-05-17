import { PageTemplate } from "./components/PageTemplate/PageTemplate";
import { BlogPage } from "./pages/BlogPage/BlogPage";
import { PostPage } from "./pages/PostPage/PostPage";
import { RegistrationConfirmPage } from "./pages/RegistrationConfirmPage/RegistrationConfirmPage";
import { SearchPage } from "./pages/SearchPage/SearchPage";
import { SignInPage } from "./pages/SignInPage/SignInPage";
import { SignUpPage } from "./pages/SignUpPage/SignUpPage";
import { SuccessPage } from "./pages/SuccessPage/SuccessPage";

export const App = () => {

  return (
    <>
      <PageTemplate>
        <SuccessPage />
        <RegistrationConfirmPage />
        <BlogPage />
        <PostPage />
        <SearchPage />
        <SignInPage />
        <SignUpPage />
      </PageTemplate>
    </>
  );
}
