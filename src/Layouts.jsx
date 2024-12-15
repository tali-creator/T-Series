import { Outlet } from 'react-router-dom'

export default function Layouts() {
  return (
    <div>
        <nav>

        </nav>

        <main>
            <Outlet />
        </main>

        <footer>

        </footer>
    </div>
  )
}
