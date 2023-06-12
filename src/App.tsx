import { useEffect } from "react";
import { PageTemplate } from "./components/PageTemplate/PageTemplate";
import { Router } from "./routes/Router";
import { verifyAccessToken } from "./api/auth/verifyAccessToken";
import { useAppDispatch } from "./store/hooks";
import { setLoggedAction } from "./store/auth/actions";

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem('access_token');

    if (token) {
      verifyAccessToken({ token }).then(() => {
        dispatch(setLoggedAction());
      });
    }

  }, [dispatch])
  
  return (
    <>
      <PageTemplate>
        <Router />
      </PageTemplate>
    </>
  );
}
