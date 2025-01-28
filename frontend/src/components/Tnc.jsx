import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

function Tnc() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Terms & Conditions - Nikah Junction</title>
        <meta
          name="description"
          content="Join Nikah Junction, India's trusted Muslim matrimony platform. Find your perfect life partner with ease. Register today!"
        />
        <meta
          name="keywords"
          content="Muslim matrimony, Nikah Junction, matrimony service, Muslim marriage, Islamic wedding, find rishta, matrimony India"
        />
        <meta name="author" content="Nikah Junction" />
        <link rel="canonical" href="https://nikahjunction.netlify.app/Tnc" />
        <meta
          property="og:title"
          content="Terms & Conditions - Nikah Junction"
        />
        <meta
          property="og:description"
          content="Nikah Junction helps you find your ideal life partner. Register now to connect with compatible matches!"
        />
        <meta
          property="og:image"
          content="https://nikahjunction.netlify.app/nikah-logo1.png"
        />
        <meta
          property="og:url"
          content="https://nikahjunction.netlify.app/Tnc"
        />
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Nikah Junction - Trusted Muslim Matrimony Service"
        />
        <meta
          name="twitter:description"
          content="Find your perfect Muslim partner on Nikah Junction. Register today!"
        />
        <meta
          name="twitter:image"
          content="https://yourwebsite.com/twitter-image.jpg"
        /> */}
      </Helmet>
      <div>
        <div className="max-w-6xl text-lg mx-auto bg-white p-6 rounded-lg shadow-lg lg:mt-6">
          <h1 className="lg:text-4xl text-2xl text-center font-bold text-green-700 lg:mb-4 mb-3">
            Terms & Conditions
          </h1>

          <p className="text-gray-700 lg:text-[18px] text-[16px]">
            Welcome to
            <span className="font-bold text-gray-900"> Aasra Foundation </span>.
            These
            <span className="font-bold text-gray-900">
              {" "}
              Terms and Conditions{" "}
            </span>
            govern your use of our website located at khidmatekhalq@gmail.com.
            By accessing or using the Site, you agree to comply with and be
            bound by these Terms. If you do not agree with these Terms, please
            do not use the Site.
          </p>

          <hr class="my-4" />

          <h2 class="lg:text-2xl text-xl font-semibold text-gray-700 mt-4">
            Use of the Website
          </h2>
          <ul class="list-disc pl-5">
            <li>
              <strong>Purpose:</strong> The website is intended to facilitate
              charitable donations and share information about our initiatives.
            </li>
            <li>
              <strong>Accuracy:</strong> Users must provide accurate and
              complete information while interacting with our website,
              particularly when making donations or filling forms.
            </li>
            <li>
              <strong>Prohibited Activities:</strong> Users must not engage in
              any unlawful activity, misuse the website, or disrupt its
              functionality.
            </li>
          </ul>

          <h2 class="lg:text-2xl text-xl font-semibold text-gray-700 mt-4">
            Donations
          </h2>
          <ul class="list-disc pl-5">
            <li>
              <strong>Voluntary Contributions:</strong> All donations made
              through the website are voluntary and non-refundable unless a
              specific issue arises that warrants a refund (subject to review).
            </li>
            <li>
              <strong>Transparency:</strong> Donated funds will be used for the
              charitable causes outlined on the website. We reserve the right to
              allocate funds as needed to achieve our mission.
            </li>
            <li>
              <strong>Receipts:</strong> Donors will receive an acknowledgment
              receipt for their contributions via email.
            </li>
          </ul>

          <h2 class="lg:text-2xl text-xl font-semibold text-gray-700 mt-4">
            Privacy and Data Security
          </h2>
          <ul class="list-disc pl-5">
            <li>
              <strong>Data Collection:</strong> We collect user data only to
              process donations, send updates, or provide relevant information.
            </li>
            <li>
              <strong>Data Usage:</strong> Personal data will not be shared with
              third parties except as required by law or with user consent.
            </li>
            <li>
              <strong>Security:</strong> While we strive to secure user data, we
              cannot guarantee complete security due to inherent risks of online
              interactions.
            </li>
          </ul>

          <h2 class="lg:text-2xl text-xl font-semibold text-gray-700 mt-4">
            Content Ownership and Usage
          </h2>
          <ul class="list-disc pl-5">
            <li>
              <strong>Content Rights:</strong> All content on the website,
              including text, images, and graphics, is the property of Aara
              Foundation or its content providers.
            </li>
            <li>
              <strong>Prohibited Use:</strong> Users may not reproduce,
              distribute, or modify website content without prior permission.
            </li>
          </ul>

          <h2 class="lg:text-2xl text-xl font-semibold text-gray-700 mt-4">
            Liability Disclaimer
          </h2>
          <ul class="list-disc pl-5">
            <li>
              <strong>No Guarantee:</strong> While we strive to provide accurate
              information, we do not guarantee the completeness or reliability
              of website content.
            </li>
            <li>
              <strong>Limited Liability:</strong> Aara Foundation is not liable
              for any indirect or incidental damages arising from the use of the
              website.
            </li>
          </ul>

          <h2 class="lg:text-2xl text-xl font-semibold text-gray-700 mt-4">
            Modification of Terms
          </h2>
          <p>
            We reserve the right to update these Terms and Conditions at any
            time. Users will be notified of significant changes via the website.
            Continued use of the website indicates acceptance of the revised
            terms.
          </p>

          <h2 class="lg:text-2xl text-xl font-semibold text-green-700 mt-4">
            Contact Us
          </h2>
          <p>
            If you have questions or concerns about these Terms and Conditions,
            contact us at
            <a
              href="mailto:aasrafoundation11@gmail.com"
              class="text-blue-500 hover:underline"
            >
              <strong>aasrafoundation11@gmail.com</strong>
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}

export default Tnc;
