import { ASSETS } from '../config/assets';

const Sidebar = () => {
  return (
    <div className="col-20">
      <div className="right">
        <div className="special_offer">
          <h2>SWISSKER ANTI-FUNGAL STICK TESTIMONIALS</h2>
          <img src={ASSETS.testimonials.mariaZ} alt="Maria Z Testimonial" className="center" />
          <p>
            "I was hesitant at first because I've tried so many treatments that didn't work, but the Swissker Anti-Fungal Stick exceeded my expectations! Within two weeks, my nails looked healthier, and the itchiness was gone. It's so easy to use, and I love that it's all-natural!"
            <br />Maria Z.
          </p>
          <img src={ASSETS.testimonials.josephT} alt="Joseph T Testimonial" className="center" />
          <p>
            "I've been using the Swissker Anti-Fungal Stick daily for about a week, and I can already see the difference. My nails feel stronger, and the discoloration is fading. I can't believe how effective this is compared to other products I've tried!"
            <br /> Joseph T.
          </p>
          <img src={ASSETS.testimonials.deannaS} alt="Deanna S Testimonial" className="center" />
          <p>
            "My husband and I both use the Swissker Anti-Fungal Stick, and it's been amazing. The roll-on applicator makes it super convenient, and we've noticed visible results in such a short time. No irritation, just healthier nails. Highly recommend!"
            <br /> Deanna S.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
