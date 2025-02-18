import { Outlet } from 'react-router-dom';
import Main from '../../components/main/Main'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

function Layout() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  )
}

export default Layout