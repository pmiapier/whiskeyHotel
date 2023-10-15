import Route from "./router/Route";
import { useAuth } from "./hooks/useAuth";
import Loading from "./components/Loading";

function App() {
  const { isLoading } = useAuth()
  if (isLoading) {
    return <Loading />
  }
  return (
    <div className="px-20">
      <Route />
    </div>
  );
}

export default App;
