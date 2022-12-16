import Header from "./header";
function Layout(props) {
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