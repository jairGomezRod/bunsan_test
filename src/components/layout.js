import { Navigate } from 'react-router-dom';
import Header from "./header";

function Layout(props) {
  const isLogged = localStorage.getItem("authenticated");
  if (!isLogged) return <Navigate to="/" replace />;
  
  return (
    <>
      <Header />
      <main role="main">
        <div className="album py-5">
          <div className="container">
            { props.children }
          </div>
        </div>
      </main>
    </>
  )
}

export default Layout;