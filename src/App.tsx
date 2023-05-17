import { PageTemplate } from "./components/PageTemplate/PageTemplate";
import { Router } from "./routes/Router";

export const App = () => {

  return (
    <>
      <PageTemplate>
        <Router />
      </PageTemplate>
    </>
  );
}
