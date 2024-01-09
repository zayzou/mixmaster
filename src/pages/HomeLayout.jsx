import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
function HomeLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const value = "global value";
  return (
    <>
      <Navbar />
      <section className="page">
        {isLoading ? (
          <div className="loading"></div>
        ) : (
          <Outlet context={{ value }} />
        )}
      </section>
    </>
  );
}

export default HomeLayout;
