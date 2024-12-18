import { Outlet } from 'react-router-dom'
import Nav from './components/nav'
import Footer from './components/footer'

export default function Layouts() {
  return (
    <div className='flex flex-col  space'>
        <nav>
            <Nav />
        </nav>

        <main className='pt-10 bg-black/90'>
            <Outlet />
        </main>

        <footer>
          <Footer />
        </footer>
    </div>
  )
}
