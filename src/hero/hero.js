import "./hero.css"
import heroImg from "../assets/17b2724d5bd682148b44a88441cad7bfa9fe6730_original-removebg-preview 1.png"

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero_wrapper">
          <div className="hero_context">
            <h2 className="hero_title">Discover Most Suitable Watches</h2>
            <p className="hero_desc">
              Find the best, reliable, and cheap smart watches here. We focus
              on product quality. Here you can find smart watches of almost all
              brands. So why you are waiting? Just order now!
            </p>
            <div className="search">
              <span>
                <i className="fa fa-search blue-color"></i>
              </span>
              <input type="text" placeholder="Find the best brands" />
              <button>Search</button>
            </div>
          </div>
          <div className="hero_img">
            <img src={heroImg} alt="Smart Watch" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;


