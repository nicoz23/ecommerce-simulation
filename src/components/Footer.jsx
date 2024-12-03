import { Link } from "react-router-dom"
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { MdMailOutline } from "react-icons/md";

function Footer() {
  return (
    <footer className="text-center text-surface/75 bg-[#1f2937] text-white/75 lg:text-left  mt-32">
    <div
      className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-white/10 lg:justify-between">
      <div className="me-12 hidden lg:block">
        <span>Get connected with us on social networks:</span>
      </div>
      <div className="flex justify-center">
        <a href="https://www.linkedin.com/in/nicolaszunino/" target="_blank" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/nicoz23" target="_blank" className="[&>svg]:h-4 [&>svg]:w-4">
          <FaGithub />
        </a>
      </div>
    </div>

    {/* Main container div */}
    <div className="mx-6 py-10 text-center md:text-left">
      <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Elements section */}
        <div className="">
          <h6
            className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
            <span className="me-3 [&>svg]:h-4 [&>svg]:w-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor">
                <path
                  d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
              </svg>
            </span>
            Ecommerce Project by Nicolás Zunino
          </h6>
          <p>
          A ReactJS-based e-commerce simulation showcasing product management, catalog integration via FakeStoreAPI, and upcoming MercadoPago integration for payments. Future plans include building a custom API to enhance functionality and performance.
          </p>
        </div>
        {/* Products section */}
        <div>
          <h6
            className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
            Products
          </h6>
          <p className="mb-4">
            <Link href="/products/all">All Products</Link>
          </p>
          <p className="mb-4">
            <Link href="/category/electronics">Electronics</Link>
          </p>
          <p className="mb-4">
            <Link href="/category/men's clothing">Men's clothing</Link>
          </p>
          <p>
            <Link href="/category/women's clothing">Women's clothing</Link>
          </p>
        </div>
        {/* Useful links section */}
        <div>
          <h6
            className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
            Useful links
          </h6>
          <p className="mb-4">
            <Link href="/profile">Profile</Link>
          </p>
          <p className="mb-4">
            <Link href="/cart">Cart</Link>
          </p>
          {/* <p className="mb-4">
            <a href="#!">Orders</a>
          </p>
          <p>
            <a href="#!">Help</a>
          </p> */}
        </div>

         {/* Contact section */}
        <div>
          <h6
            className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
            Contact
          </h6>
          <p className="mb-4 flex items-center justify-center md:justify-start">
            <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
              <TbWorld />
            </span>
            <a href="https://nicolaszunino.vercel.app/" target="_blank">Portfolio</a>
          </p>
          <p className="mb-4 flex items-center justify-center md:justify-start">
            <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
              <MdMailOutline />
            </span>
            <a href="mailto:nicolaszuninodev@gmail.com" target="_blank">
              nicolaszuninodev@gmail.com
            </a>
          </p>
          <p className="flex items-center justify-center md:justify-start">
            <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
              <FaLinkedinIn />
            </span>
            <a href="https://www.linkedin.com/in/nicolaszunino/" target="_blank">Linkdin</a>
          </p>
          <p className="mb-4 flex items-center justify-center md:justify-start">
            <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
              <FaGithub />
            </span>
            <a href="https://github.com/nicoz23/" target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
        </div>
      </div>
    </div>
    <div className="bg-black/5 p-6 text-center">
      <span>© 2024 Copyright | Nicolás Zunino</span>
    </div>
    </footer>
  )
}

export default Footer
