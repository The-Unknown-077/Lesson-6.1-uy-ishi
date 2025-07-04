import "./lastCard.css";

import lastImg from "../assets/MKUQ3_VW_34FR+watch-45-alum-midnight-nc-7s_VW_34FR_WF_CO-removebg-preview (1) 1.png";

function LastCard() {
  return (
    <section className="last_card">
      <div className="container">
        <div className="last_card_wrapper">
          <div className="last_card">
            <div className="context">
              <h2 className="title">Subscribe To Newsletter</h2>
              <p className="last_spoiler">
                Get free guide about smart watches daily.
              </p>
              <div className="search">
                <input type="text" placeholder="Find the best brands" />
                <button>Search</button>
              </div>
            </div>
            <div className="last_img">
              <img src={lastImg} alt="Smart Watch Promotion" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LastCard;
