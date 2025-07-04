import "./brands.css"

import firstImg from "../assets/apple-watch-series7-black-myshop-pk-1-removebg-preview 1.png";
import secondImg from "../assets/xiaomi_redmi_watch_2_lite_azul_01_l-removebg-preview 1.png";
import thirdImg from "../assets/6426000_sd-removebg-preview 1.png";


function BrandsCard() {
  return (
    <section className="brands_card">
      <div className="container">
        <div className="brands_card_wrapper">
          <div className="b_cards">
            <div className="b_card">
              <img src={firstImg} alt="Apple Watch" />
              <div className="b_c_context">
                <h2 className="b_title">Apple</h2>
                <p className="b_desc">
                  Apple is one of the most famous smart watches providing company.
                </p>
              </div>
            </div>

            <div className="b_card">
              <img src={secondImg} alt="Xiaomi Watch" />
              <div className="b_c_context">
                <h2 className="b_title">Xiaomi</h2>
                <p className="b_desc">
                  Xiaomi smart watches are produced by MI company.
                </p>
              </div>
            </div>

            <div className="b_card">
              <img src={thirdImg} alt="Fitbit Watch" />
              <div className="b_c_context">
                <h2 className="b_title">FitBit</h2>
                <p className="b_desc">
                  FitBit smart watches are best for their health and fitness features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandsCard;