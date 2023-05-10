import { PageTemplate } from "./components/PageTemplate/PageTemplate";
import { BlogPage } from "./pages/BlogPage/BlogPage";
import { PostPage } from "./pages/PostPage/PostPage";
// import { RegistrationConfirm } from "./pages/RegistrationConfirm/RegistrationConfirm";
import { SignUpPage } from "./pages/SignUpPage/SignUpPage";

export const App = () => {


  return (
    <>
      <PageTemplate>
        <BlogPage />
      </PageTemplate>
    </>
  );
}
