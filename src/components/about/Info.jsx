import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="uil uil-university about__icon"></i>
        <h3 className="about__title">University</h3>
        <span className="about__subtitle">Gujrat Technology University</span>
      </div>

      <div className="about__box">
        <i class="uil uil-desktop-alt about__icon"></i>
        <h3 className="about__title">Degree</h3>
        <span className="about__subtitle">EC Engineering</span>
      </div>

      <div className="about__box">
        <i class="uil uil-graduation-cap about__icon"></i>
        <h3 className="about__title">PassOut</h3>
        <span className="about__subtitle">Present</span>
      </div>
    </div>
  );
};

export default Info;
