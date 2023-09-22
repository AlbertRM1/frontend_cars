import Footer from "../components/Footer";

export function Cookies() {
  return (
    <>
      <section className="contact-page">
        <br />
        <div className="container">
          <div className="cookies">
            <div>
                <h1>Cookies Page</h1>
                <p>Welcome to our cookies page. Here you will find all the information you need to know about the use of cookies on our website.</p>
                <br />
                <h2>What are cookies?</h2>

                <p><a href="https://en.wikipedia.org/wiki/HTTP_cookie" target="_blank">Cookies</a> are small text files that are stored on your device when you visit a website. These cookies allow us to collect information 
                about your browsing and track your preferences.</p>
                <br />
                <h2>Why do we use cookies?</h2>

                <p>We use cookies to improve your browsing experience and to provide you with a personalized website. By using cookies, we can remember your preferences and tailor the content we show you.</p>
                <br />
                <h2>Types of cookies</h2>

                <p>
                There are different types of cookies that are used for different purposes. Here are some of them:

                Essential cookies: These cookies are necessary for the website to function properly. You cannot disable these cookies.

                Performance cookies: These cookies allow us to collect information about how users use our website, such as the pages they visit most often or errors that may occur. This data helps us improve the performance of our site.

                Functionality cookies: These cookies allow the website to remember your choices, such as your preferred language or the region you are in. This improves your browsing experience and provides you with more relevant content.

                Advertising cookies: These cookies are used to show you relevant and personalized advertisements based on your interests. They may also be used by third parties to display advertisements on other websites you visit.</p>
                <br />
                <h2>How can I manage cookies?</h2>

                <p>You can manage your cookie preferences through your browser settings. Most browsers allow you to control which cookies are stored on your device and delete them if you wish. However, please note that by disabling certain cookies, some features of our website may not be available.</p>
                <br />
                <h2>More information</h2>

                <p>If you would like more information about how we use cookies on our website, please see our <a href="/privacy">privacy policy</a> and cookie policy.</p>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}
