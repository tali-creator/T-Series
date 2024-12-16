import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div>
      <div className="grid grid-cols-3 w-full space-y-3 justify-between md:justify-center p-7 bg-orange-700">
        <div className="space-y-2 col-span-3  flex flex-col sm:col-span-2 md:col-span-1">
          <h1 className="text-3xl font-black text-black/90">T-Series</h1>
          <Link>Privacy Policy</Link>
          <Link>User Agreement</Link>
          <Link>Report Content</Link>
        </div>
        <div className="space-y-2 col-span-3 sm:col-span-2 flex-col md:col-span-1">
          <h1 className="text-3xl font-black text-black/90">Contact-Us</h1>
          <p>Service Email: Tseries@gmail.com</p>
        </div>
        <div className="space-y-2  col-span-3 sm:col-span-2 flex-col md:col-span-1">
          <h1 className="text-3xl font-black text-black/90">Sociels </h1>
          <div className="space-x-2">
            <Link className=" flex flex-none text-4xl fab fa-whatsapp"></Link>
            <Link className=" flex flex-none text-4xl fab fa-telegram"></Link>
            <Link className=" flex flex-none text-4xl fab fa-facebook"></Link>
            <Link className=" flex flex-none text-4xl fab fa-tiktok"></Link>
            <Link className=" flex flex-none text-4xl fab fa-twitter"></Link>
          </div>
        </div>
      </div>

      <div className="w-full bg-black/90 py-2 text-center text-orange-700">
        <p>@CopyRight 2024</p>
      </div>
    </div>
  );
}
