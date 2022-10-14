import "./App.css";
import Navbar from "./components/Navbar";
const explore = [
  "Features",
  "Pricing",
  "Examples",
  "Newsletter",
  "Community",
  "Podcast",
];
const company = ["About", "Careers", "Blog", "Press", "Partners", "Discover"];
const Support = [
  "Knowledge Base",
  " Contact Support",
  "Contact Sales",
  "Privacy Policy",
  "Terms of Use",
  "Content Guidelines",
  " House Rules",
  "Cookies Policy",
  "Ethics Line",
  "Accessibility",
];

function App() {
  return (
    <div className="container">
      <Navbar />
      {/* first block of data */}
      <div className="firstBlock_container">
        <div>
          <img
            src="https://lh3.googleusercontent.com/00Zv0YR0gpTo_gh5Cz8RzWRAEOITRzkUx9517UiJLhRttRhf11BBPyVN6g_dMXqWQVsymrZ1ko2SwBhkcZmlLlU5EEDpNJdRZZlcskVUl1s=-rw-w896"
            className="firstimage"
            alt="first image"
          />
        </div>
        <div className="firstblock_content">
          <p className="firstblock_heading">Share what you know.™ </p>
          <p className="firstblock_txt">
            Transform your knowledge into a thriving business with the best
            online course platform for creators everywhere.
          </p>
          <div className="firstblock_btnWrapper">
            <div className="txtField_wrapper">
              <input
                type={"text"}
                placeholder="Your Email here"
                className="textBox"
              />
            </div>
            <div className="btn_wrapper">
              <button>Get Started</button>
            </div>
          </div>
        </div>
      </div>

      {/* second block */}
      <div className="secontblock_container">
        <p className="secondblock_txt">
          The master of hand lettering. The Aristotle of coding. The authority
          on drone flying. From online courses to coaching and beyond, this is
          where creative entrepreneurs build the future.{" "}
        </p>
      </div>

      {/* third block */}
      <div className="thirdblock_container">
        <div className="thirdblockImage_wrapper">
          <img
            src="https://lh3.googleusercontent.com/GXeCJsAwAASnToYQqHHw3dekLSQYOm-LzE-hAfkNiTlAnCbrbBvPY_k2OEeVvQrAjiLPx67OGh5PGoQY3HCTus2hXqT0mmimjxXgjNLAoxCG=w1800"
            className="thirdblock_image"
          />
          <p className="thirdblock_txt">
            Create online courses, build a brand, scale your business.{" "}
          </p>
          <div className="btn_wrapper">
            <button>Get Started for free</button>
          </div>
        </div>
      </div>

      {/* fourth block */}
      <div className="fourthblock_container">
        <div>
          <img
            src="https://lh3.googleusercontent.com/WIYpvPF9DmZsxdY06CBak-WFwVWTq759OVuUMX0dPIkT0rGfQZnUy-fkKrz3X-80sRDh7GbQYwlxX6Gmf1ZI-rqiqMa_tA=-rw-w896"
            className="third_image"
            alt="third_image"
          />
        </div>
        <div>
          <p className="fourthblock_txt">
            Join more than 100,000 creators who’ve sold over $1 billion in
            courses and coaching.
          </p>

          <p className="fourthblock_featureTxt">View Features</p>
        </div>
      </div>

      {/* fifth block */}
      <div className="fifthblock_container">
        <div className="fifthblock_box">
          <div className="border_container">1</div>
          <p className="fifthblock_heading">Easy as it gets. </p>
          <p className="fifthblock_txt">
            In a matter of minutes, you’ll have access to everything you could
            ever need to create and sell online courses and coaching—our
            stress-free platform makes it easy—tech skills or no tech skills.
          </p>
        </div>
        <div className="fifthblock_box">
          <div className="border_container">2</div>
          <p className="fifthblock_heading">Teach the way you want to learn.</p>
          <p className="fifthblock_txt">
            This is the fun part. Show off your brand’s unique POV by using our
            customization tools to curate and personalize your content.
          </p>
        </div>

        <div className="fifthblock_box">
          <div className="border_container">3</div>
          <p className="fifthblock_heading">
            The small matter of getting paid.
          </p>
          <p className="fifthblock_txt">
            You didn't go into business to stress over money (quite the
            opposite) so we've got that covered. Payouts, taxes, affiliates,
            authors, that's our thing—you do yours.
          </p>
        </div>
      </div>

      {/* sixth block */}
      <div className="sixthblock_container">
        <div className="sixthblock_block1">
          <p className="top_word"> In my own words </p>
          <p className="bigTxt">
            “What really has clinched it for me, why I chose Teachable, and why
            I love it and will continue to do my online courses with Teachable,
            is the great support that they have.”
          </p>
          <p className="authorName">Julia Stoian : Live. Write. Thrive</p>
        </div>
        <div className="sixthblock_block2">
          <img
            src="https://lh3.googleusercontent.com/8p5335szrCguw-halyjPfBokW2EfLiINB4MslBfO8sK-kVtPXZQI1fVMQ1_bxiHd-AF6iu_iBIN_xpH8SJr7LIo5KrDELw=-rw-w445-rw"
            alt="sixthblock image"
            className="sixthblock_image"
          />
        </div>
      </div>
      <div className="seventhblock_container">
        <div>
          <p className="seventhblock_heading">
            Establish Your Business's Hub on Teachable
          </p>
          <p className="seventhblock_txt">
            In this free mini course, learn how to showcase your business and
            start collecting leads on Teachable in just five days.
          </p>
          <p className="seventhblock_btn">Register for free </p>
        </div>
        <div>
          <img
            src="https://lh3.googleusercontent.com/cwXUQx2yAbSy6uoSJJfuemPQg8466G7Z27XZ6dqukQmu-yPlmNI2zGyGxuylforcJXQZn-n9wVCm8cngcpiAjLzzNCLJJIC4=-rw-w1248"
            className="seventhblock_image"
            alt="seventhblock_image"
          />
        </div>
      </div>

      <div className="eightblock_container">
        <div className="eightblock_div1">
          <img
            src="https://lh3.googleusercontent.com/NEOFTCxpgsIKRqnaEGUYTZ0Er510oQoleGr2zZ5k_dYknzjuHx_4mYhf8dbsMqh0dPDhWaCxJvIjc-y4e6FXqpHSx7Hw6-4=-rw-w966"
            className="eightblock_image"
            alt="eightblock_image"
          />
        </div>
        <div className="eightblock_div2">
          <p className="eightblock_txt">
            Award-winning support for creators and businesses of all sizes and
            subjects.
          </p>
        </div>
      </div>
      <div className="ninethblock_container">
        <div>
          <p className="nineblock_txt1">Share what you know. </p>
          <p className="nineblock_txt2">Sign up free today.</p>
          <div className="nineblock_btn">
            <button>Get Started </button>
          </div>
        </div>
      </div>

      <div className="footer1">
        <div className="footer1_block1">
          <p className="footer1_txt1">teach:able</p>
          <p className="footer1_txt2">
            Join the more than 100,000 creators who use Teachable to share their
            knowledge. Easily create an online course or coaching business with
            our powerful yet simple all-in-one platform.{" "}
          </p>
        </div>
        <div className="footer1_block2">
          <div>
            <h3>Explore</h3>
            {explore?.map((val) => {
              return <h4>{val}</h4>;
            })}
          </div>
          <div>
            <h3>Company</h3>
            {company?.map((val) => {
              return <h4>{val}</h4>;
            })}
          </div>
          <div>
            <h3>Support</h3>
            {Support?.map((val) => {
              return <h4>{val}</h4>;
            })}
          </div>
        </div>
      </div>
      <div className="footer2">
        Copyright © 2022 Teachable, Inc. All rights reserved.
      </div>
    </div>
  );
}

export default App;
