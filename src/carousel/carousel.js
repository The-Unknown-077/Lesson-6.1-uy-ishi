import "./carousel.css";

import img1 from "../assets/6426000_sd-removebg-preview 1 (1).png";
import img2 from "../assets/6426000_sd-removebg-preview 1 (2).png";

function Carousel() {
  return (
    <section className="carousel">
      <div className="container">
        <div className="carousel_wrapper">
          <div className="latest_context">
            <p className="latest_spoiler">Here are our some of the best clients.</p>
            <h2 className="latest_title">What People Say About Us</h2>
          </div>

          <div className="car_cards">
            <div className="b_card">
              <img src={img1} alt="Hamza Faizi" />
              <div className="b_c_context">
                <h2 className="b_title">Hamza Faizi</h2>
                <p className="car_desc">
                  Don’t waste time, just order! This is the best website to purchase smart watches.
                </p>
                <span>
                  <svg width="141" height="28" viewBox="0 0 141 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.552 4.27905L18.0387 9.65722L23.5995 10.5249L19.5758 14.7089L20.5254 20.6198L15.552 17.8276L10.5786 20.6198L11.5282 14.7089L7.50446 10.5249L13.0653 9.65722L15.552 4.27905Z" fill="#1E1D1D" stroke="#1E1D1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M62.2278 4L64.7145 9.37817L70.2753 10.2459L66.2515 14.4299L67.2011 20.3407L62.2278 17.5485L57.2544 20.3407L58.204 14.4299L54.1802 10.2459L59.7411 9.37817L62.2278 4Z" fill="#1E1D1D" stroke="#1E1D1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M85.5656 4L88.0523 9.37817L93.6131 10.2459L89.5894 14.4299L90.539 20.3407L85.5656 17.5485L80.5922 20.3407L81.5418 14.4299L77.518 10.2459L83.0789 9.37817L85.5656 4Z" fill="#1E1D1D" stroke="#1E1D1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M108.501 4L110.988 9.37817L116.549 10.2459L112.525 14.4299L113.475 20.3407L108.501 17.5485L103.528 20.3407L104.477 14.4299L100.454 10.2459L106.014 9.37817L108.501 4Z" fill="#1E1D1D" stroke="#1E1D1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M38.8899 4L41.3766 9.37817L46.9374 10.2459L42.9137 14.4299L43.8633 20.3407L38.8899 17.5485L33.9165 20.3407L34.8661 14.4299L30.8423 10.2459L36.4032 9.37817L38.8899 4Z" fill="#1E1D1D" stroke="#1E1D1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </div>

            <div className="b_card">
              <img src={img2} alt="Hafiz Huzaifa" />
              <div className="b_c_context">
                <h2 className="b_title">Hafiz Huzaifa</h2>
                <p className="car_desc">
                  I’ve been purchasing smart watches of Mohid for a long time. All the products are good quality.
                </p>
                <span>
                  <svg width="141" height="28" viewBox="0 0 141 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.552 4.27905L18.0387 9.65722L23.5995 10.5249L19.5758 14.7089L20.5254 20.6198L15.552 17.8276L10.5786 20.6198L11.5282 14.7089L7.50446 10.5249L13.0653 9.65722L15.552 4.27905Z" fill="#1E1D1D" stroke="#1E1D1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M62.2278 4L64.7145 9.37817L70.2753 10.2459L66.2515 14.4299L67.2011 20.3407L62.2278 17.5485L57.2544 20.3407L58.204 14.4299L54.1802 10.2459L59.7411 9.37817L62.2278 4Z" fill="#1E1D1D" stroke="#1E1D1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M85.5656 4L88.0523 9.37817L93.6131 10.2459L89.5894 14.4299L90.539 20.3407L85.5656 17.5485L80.5922 20.3407L81.5418 14.4299L77.518 10.2459L83.0789 9.37817L85.5656 4Z" fill="#1E1D1D" stroke="#1E1D1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M108.501 4L110.988 9.37817L116.549 10.2459L112.525 14.4299L113.475 20.3407L108.501 17.5485L103.528 20.3407L104.477 14.4299L100.454 10.2459L106.014 9.37817L108.501 4Z" fill="#1E1D1D" stroke="#1E1D1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M38.8899 4L41.3766 9.37817L46.9374 10.2459L42.9137 14.4299L43.8633 20.3407L38.8899 17.5485L33.9165 20.3407L34.8661 14.4299L30.8423 10.2459L36.4032 9.37817L38.8899 4Z" fill="#1E1D1D" stroke="#1E1D1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;