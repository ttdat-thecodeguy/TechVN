import "./about.scss"
const AboutMe = (props) => {
  return (
    <>
      <nav className="about-me">
        <div class="container">
          
          <div class="mainAboutMe" id="Home">
            <div class="heading-section bg-02" style={{ backgroundImage: `url("images/img_bg_1.jpg")` }}>
              <div class="heading-box">
                <h1>
                  Hi <br />
                  I'm Dat{" "}
                </h1>
                <p class="heading-sub">
                  Fresher Developer
                  <br />
                  Student At{" "}
                  <a href="#HCMUS" class="border-btt">
                    HCMUS
                  </a>
                </p>
                <a class="btn-portpolio" href="#CV">
                  Xem CV <i class="fa fa-briefcase"></i>
                </a>
              </div>
            </div>
            <div class="section about_us-section" id="About">
              <div class="about_us-box">
                <h2 class="text-heading-section">ABOUT ME</h2>
                <h3 class="text-sub-section">WHO AM I?</h3>
                <div class="section-content">
                  <p>
                    <span style={{ fontWeight: 900 }}>
                      {" "}
                      Xin Chào, Tôi là Trương Thành Đạt
                    </span> {" "}
                    Hiện tại tôi là sinh viên và đang học tại đại học Khoa Học
                    Tự Nhiên(HCMUS), Khoa công nghệ thông tin
                  </p>
                </div>
              </div>

              <div class="row">
                <div class="col col-1-of-3 skill-box box-2 right-to-left-ani-1dot8">
                  <i class="fa fa-globe" aria-hidden="true"></i>
                  <br />
                  <span>Web Design</span>
                </div>
                <div class="col col-2-of-3 skill-box box-3 down-to-up-ani-2">
                  <i class="fa fa-table" aria-hidden="true"></i>
                  <br />
                  <span>Software</span>
                </div>
                <div class="col col-3-of-3 skill-box box-4 down-to-up-ani-2dot2">
                  <i class="fa fa-mobile" aria-hidden="true"></i>
                  <br />
                  <span>Application</span>
                </div>
              </div>
              <div class="hire-box">
                <div class="hire-text">
                  <p>Rất vui được làm quen</p>
                  <p>Tôi là sinh viên thuộc hệ liên thông, năm nay tôi { new Date().getFullYear() - 1999 } tuổi, sở thích của tôi là nghe nhạc, đọc sách cũng như viết code, thỉnh thoảng tôi cũng thích chạy bộ và nhảy dây</p>
                </div>
                <a href="#Contact">Contact Me</a>
              </div>
            </div>

            <div class="special-section section" id="Skills">
              <h2 class="text-heading-section">MY SPECIALTY </h2>
              <h3 class="text-sub-section">MY SKILLS </h3>
              <div class="section-content">
                <p>
                  Kĩ năng chính của tôi chủ yếu tập trung vào ngôn ngữ backend
                  như java hay nodejs chủ yếu tôi tập trung vào các framework
                  như: Express (Nodejs), Spring(Java) ngoài ra tôi còn tìm hiểu
                  thêm về linux cũng như nosql, tôi cũng một chút kiến thức cơ
                  bản của front end như HTML, CSS, Jquery
                </p>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <h3>Linux</h3>
                  <div class="special-line">
                    <div class="line line-pts bg-blue">
                      <div class="dot bg-blue"></div>
                      <span>40%</span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <h3>Front-end</h3>
                  <div class="special-line">
                    <div class="line line-jquery bg-red">
                      <div class="dot bg-red"></div>
                      <span>35%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <h3>Spring</h3>
                  <div class="special-line">
                    <div class="line line-html bg-yellow">
                      <div class="dot bg-yellow"></div>
                      <span>75%</span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <h3>Nodejs</h3>
                  <div class="special-line">
                    <div class="line line-css bg-purple">
                      <div class="dot bg-purple"></div>
                      <span>55%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div class="contact-section section" id="Ticket">
              <h2 class="text-heading-section">TICKET TO MARS</h2>
              <h3 class="text-sub-section">MY TICKET</h3>

              <iframe
                title="mars-ticket"
                width="980"
                height="410"
                src="https://mars.nasa.gov/layout/embed/send-your-name/future/certificate/?cn=53801149592"
                frameborder="0"
              ></iframe>
            </div> */}

            <div class="contact-section section" id="CV">
              <h2 class="text-heading-section">CV Job</h2>
              <h3 class="text-sub-section">MY CV</h3>
              <b>Main Skill</b>
              <ul>
                <li>
                  <a href="/">CV Android Developer</a>
                </li>
                <li>
                  <a href="/">CV Backend Developer</a>
                </li>
                <li>
                  <a href="/">CV FullStack Developer</a>
                </li>
              </ul>
              <b>Side Skill</b>
              <ul>
                <li>
                  <a href="/">Figma Basic Design</a>
                </li>
                <li>
                  <a href="/">Basic AWS</a>
                </li>
                <li>
                  <a href="/">Basic Linux</a>
                </li>
              </ul>
            </div>

            <div class="contact-section section" id="Contact">
              <h2 class="text-heading-section">GET IN TOUCH</h2>
              <h3 class="text-sub-section">CONTACT</h3>
              <div class="row">
                <div class="col col-lg-6">
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
                <div class="col col-lg-6">
                  <form action="">
                    <div class="row">
                      <input type="text" name="" id="" placeholder="Name" />
                    </div>
                    <div class="row">
                      <input type="text" name="" id="" placeholder="Email" />
                    </div>
                    <div class="row">
                      <input type="text" name="" id="" placeholder="Subject" />
                    </div>
                    <div class="row">
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Messeage"
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
        </div>
      </nav>
    </>
  );
};

export default AboutMe;
