/**
 * Main App component
 */
import { navigate, Redirect, Router } from "@reach/router";
import { useDispatch, useSelector } from "react-redux";
import {
  disableSidebarForRoute,
  getAuthUserProfile,
} from "@topcoder/micro-frontends-navbar-app";
import React, { useEffect, useLayoutEffect } from "react";
import styles from "./styles/main.module.scss";
import GetStarted from "./containers/GetStarted";
import actions from "./actions";
import _ from "lodash";
import Loading from "./components/Loading";

const useProfile = () => {
  const { isLoggedIn } = useSelector((state) => state.authUser);
  const dispatch = useDispatch();

  useEffect(() => {
    let isMounted = true;

    if (!isLoggedIn) {
      getAuthUserProfile()
        .then((res) => {
          dispatch(
            actions.authUser.authUserSuccess(
              _.pick(res, [
                "handle",
                "firstName",
                "lastName",
                "photoUrl",
                "addresses",
              ])
            )
          );
        })
        .catch((err) => {
          if (isMounted) {
            navigate("/");
          }
        });
    }

    return () => {
      isMounted = false;
    };
  }, [isLoggedIn, dispatch]);

  return isLoggedIn;
};

const App = () => {
  useLayoutEffect(() => {
    disableSidebarForRoute("/onboard/*");
  }, []);

  const isLoggedIn = useProfile();

  return (
    <div className={styles["topcoder-micro-frontends-onboarding-app"]}>
      {isLoggedIn ? (
        <Router>
          <Redirect from="/onboard" to="/onboard/get-started" exact />
          <GetStarted path="/onboard/get-started" />
        </Router>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default App;
