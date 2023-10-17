import Route from "./router/Route";
import { useAuth } from "./hooks/useAuth";
import Loading from "./components/Loading";
import { ToastContainer } from "react-toastify";

function App() {
  const { isLoading } = useAuth();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="px-20">
      <Route />
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        theme="colored"
      />
    </div>
  );
}

export default App;
