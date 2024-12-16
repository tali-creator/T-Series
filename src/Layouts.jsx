import { Outlet } from 'react-router-dom'
import Nav from './components/nav'
import Footer from './components/footer'

export default function Layouts() {
  return (
    <div className='flex flex-col'>
        <nav>
            <Nav />
        </nav>

        <main>
            <Outlet />
        </main>

        <footer>
          <Footer />
        </footer>
    </div>
  )
}
