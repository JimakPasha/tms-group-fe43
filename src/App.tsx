import { PageTemplate } from "./components/PageTemplate/PageTemplate";
import { BlogPage } from "./pages/BlogPage/BlogPage";

export const App = () => {


  return (
    <>
      <PageTemplate>
        <BlogPage />
      </PageTemplate>
    </>
  );
}
