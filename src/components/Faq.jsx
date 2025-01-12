import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Faq = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions - Nikah Junction</title>
        <meta
          name="description"
          content="Join Nikah Junction, India's trusted Muslim matrimony platform. Find your perfect life partner with ease. Register today!"
        />
        <meta
          name="keywords"
          content="Muslim matrimony, Nikah Junction, matrimony service, Muslim marriage, Islamic wedding, find rishta, matrimony India"
        />
        <meta name="author" content="Nikah Junction" />
        <link rel="canonical" href="https://nikahjunction.netlify.app/Faq" />
        <meta
          property="og:title"
          content="Frequently Asked Questions - Nikah Junction"
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
          content="https://nikahjunction.netlify.app/Faq"
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
      <div className="container mx-auto p-6">
        <h1 className="lg:text-4xl text-2xl text-green-700 font-bold lg:mb-6 text-center">
          Frequently Asked Questions
        </h1>

        <div className="space-y-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="lg:text-xl text-lg font-semibold mb-3">
              What is Khidmat-e-Khalq?
            </h2>
            <blockquote className="lg:border-l-4 border-l-2 border-blue-500 lg:text-[18px] text-[16px] pl-4 italic text-gray-700">
              &ldquo;Khidmat-e-Khalq is a Muslim charity organization dedicated
              to serving humanity through various initiatives like education,
              healthcare, and disaster relief, inspired by the principles of
              Islam.&rdquo;
            </blockquote>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="lg:text-xl text-lg font-semibold mb-3">
              How can I contribute to Khidmat-e-Khalq?
            </h2>
            <blockquote className="lg:border-l-4 border-l-2 border-blue-500 lg:text-[18px] text-[16px] pl-4 italic text-gray-700">
              &ldquo;You can contribute through online donations, volunteering
              your time, or partnering with us for specific projects. Visit our
              donation page for more details.&rdquo;
            </blockquote>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="lg:text-xl text-lg font-semibold mb-3">
              Who benefits from Khidmat-e-Khalq’s initiatives?
            </h2>
            <blockquote className="lg:border-l-4 border-l-2 border-blue-500 lg:text-[18px] text-[16px] pl-4 italic text-gray-700">
              &ldquo;Our initiatives are aimed at underprivileged communities,
              including those in need of education, medical care, and basic
              necessities, regardless of their background or religion.&rdquo;
            </blockquote>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="lg:text-xl text-lg font-semibold mb-3">
              Are donations to Khidmat-e-Khalq tax-deductible?
            </h2>
            <blockquote className="lg:border-l-4 border-l-2 border-blue-500 lg:text-[18px] text-[16px] pl-4 italic text-gray-700">
              &ldquo;Yes, donations made to Khidmat-e-Khalq are eligible for tax
              exemptions under Indian tax laws. Please check our guidelines for
              detailed information.&rdquo;
            </blockquote>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="lg:text-xl text-lg font-semibold mb-3">
              How does Khidmat-e-Khalq ensure transparency in the use of funds?
            </h2>
            <blockquote className="lg:border-l-4 border-l-2 border-blue-500 lg:text-[18px] text-[16px] pl-4 italic text-gray-700">
              &ldquo;We provide regular reports and updates on our projects, and
              our financial statements are audited to maintain accountability
              and transparency.&rdquo;
            </blockquote>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="lg:text-xl text-lg font-semibold mb-3">
              Can I volunteer with Khidmat-e-Khalq?
            </h2>
            <blockquote className="lg:border-l-4 border-l-2 border-blue-500 lg:text-[18px] text-[16px] pl-4 italic text-gray-700">
              &ldquo;Yes, we welcome volunteers who wish to contribute their
              time and skills to our charitable initiatives. Reach out to us
              through our volunteer page for opportunities.&rdquo;
            </blockquote>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="lg:text-xl text-lg font-semibold mb-3">
              What types of projects does Khidmat-e-Khalq undertake?
            </h2>
            <blockquote className="lg:border-l-4 border-l-2 border-blue-500 lg:text-[18px] text-[16px] pl-4 italic text-gray-700">
              &ldquo;Our projects include educational scholarships, medical
              camps, food distribution drives, orphan care, and disaster relief
              efforts, among others.&rdquo;
            </blockquote>
          </div>

          {/* New FAQs */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="lg:text-xl text-lg font-semibold mb-3">
              Can I donate specific items like clothes or food?
            </h2>
            <blockquote className="lg:border-l-4 border-l-2 border-blue-500 lg:text-[18px] text-[16px] pl-4 italic text-gray-700">
              &ldquo;Yes, we accept in-kind donations such as clothes, food, and
              other essentials during specific campaigns. Please contact us for
              the current requirements.&rdquo;
            </blockquote>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="lg:text-xl text-lg font-semibold mb-3">
              How can I stay updated about Khidmat-e-Khalq’s activities?
            </h2>
            <blockquote className="lg:border-l-4 border-l-2 border-blue-500 lg:text-[18px] text-[16px] pl-4 italic text-gray-700">
              &ldquo;You can follow us on our social media platforms or
              subscribe to our newsletter to receive regular updates about our
              work.&rdquo;
            </blockquote>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
