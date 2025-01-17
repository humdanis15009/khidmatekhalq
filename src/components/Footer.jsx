import { Link } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="bg-green-900 text-white py-8 px-4 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <div
              className="lg:text-[70px] text-[30px] font-DancingScript"
              style={{ fontFamily: "Dancing Script" }}
            >
              Aasra Foundation
            </div>
            <img
              className="lg:h-24 lg:w-20 h-9 w-8"
              src="images/logo2.png"
              alt="Aasra Foundation Logo"
            />
          </div>
        </div>

        {/* Footer Navigation and Links */}
        <div className="lg:flex lg:justify-between lg:space-x-16 mt-6">
          <div className="lg:w-1/3 w-full">
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="hover:text-pink-700" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-pink-700" to="/AboutUs">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-pink-700" to="/Contact">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-pink-700" to="/Faq">
                  FAQ
                </Link>
              </li>
              <li>
                <Link className="hover:text-pink-700" to="/Privacy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="hover:text-pink-700" to="/Tnc">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link className="hover:text-pink-700" to="/Services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="hover:text-pink-700" to="/Donate">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Latest News Section */}
          <div className="lg:w-1/3 w-full mt-6 lg:mt-0">
            <h3 className="text-lg font-semibold mb-4">Latest News</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="hover:text-pink-700"
                  href="https://indianexpress.com/about/earthquake/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Calamity 1: Earthquake in Region X
                </a>
              </li>
              <li>
                <a
                  className="hover:text-pink-700"
                  href="https://economictimes.indiatimes.com/topic/flood"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Flood Relief Efforts in Region Y
                </a>
              </li>
              <li>
                <a
                  className="hover:text-pink-700"
                  href="https://indianexpress.com/about/cyclone/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cyclone Z: How We’re Helping
                </a>
              </li>
              <li>
                <a
                  className="hover:text-pink-700"
                  href="https://indianexpress.com/about/forest-fire/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wildfires in Region A - Latest Updates
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="lg:w-1/3 w-full mt-6 lg:mt-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="hover:text-pink-700" to="/Volunteer">
                  Become a Volunteer
                </Link>
              </li>
              <li>
                <Link className="hover:text-pink-700" to="/Campaigns">
                  Our Campaigns
                </Link>
              </li>
              <li>
                <Link className="hover:text-pink-700" to="/Events">
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link className="hover:text-pink-700" to="/Partners">
                  Our Partners
                </Link>
              </li>
              <li>
                <Link className="hover:text-pink-700" to="/Blog">
                  Our Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="lg:border-t-4 border-t-2 border-yellow-500 pt-6 mt-6">
          <div className="text-center text-[12px] lg:text-[14px] text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Aasra Foundation. All Rights
              Reserved.
            </p>
            <p>Designed with ❤️ for the betterment of the community.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
