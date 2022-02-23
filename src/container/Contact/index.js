const Contact = (props) => {
  return (

    <nav className="about-me">
        <div class="row max-width" style={{ display: "flow-root" }}>
        <div class="contact-section section " id="Contact">
              <h2 class="text-heading-section">GET IN TOUCH</h2>
              <h3 class="text-sub-section">CONTACT</h3>
              <div class="row">
                <div class="col col-1-of-2">
                  <ul>
                    <li>
                      {" "}
                      <i class="fa fa-globe" aria-hidden="true"></i>
                      <a href="mailto:ttdat17ck1@gmail.com">ttdat17ck1@gmail.com</a>
                    </li>
                    <li>
                      {" "}
                      <i class="fa fa-map" aria-hidden="true"></i> Đại Học KHTN, 227 Nguyễn Văn Cừ,
                      TP HCM
                    </li>
                    <li>
                      <i class="fa fa-phone" aria-hidden="true"></i>+949254478
                    </li>
                  </ul>
                </div>
                <div class="col col-2-of-2">
                  <form action="">
                    <div class="row">
                      <input type="text" name="" id="" placeholder="Name" style={{ width: "100%" }}/>
                    </div>
                    <div class="row">
                      <input type="text" name="" id="" placeholder="Email" style={{ width: "100%" }}/>
                    </div>
                    <div class="row">
                      <input type="text" name="" id="" placeholder="Subject" style={{ width: "100%" }} />
                    </div>
                    <div class="row">
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Messeage"
                        style={{ width: "100%" }}
                      ></textarea>
                    </div>
                    <div class="row">
                      <button class="submit">
                       SEND MESSEAGE
                      </button>
                    </div>
                  </form>
                  
                </div>
              </div>
            </div>
        </div>
    </nav>

    

  );
};

export default Contact;
