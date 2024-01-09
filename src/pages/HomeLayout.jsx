import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
function HomeLayout() {
  const navigation = useNavigation();
  console.log(navigation);
  const isLoading = navigation.state === "loading";

  return (
    <>
      <Navbar />
      <section className="page">
        {isLoading ? <div className="loading"></div> : <Outlet />}
      </section>
    </>
  );
}

export default HomeLayout;
