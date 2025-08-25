import React from "react";

function Team() {
  return (
    <section className="container py-5 mb-5">
      <header className="text-center mb-5">
        <h2 className="text-secondary fw-light">People</h2>
        <p className="text-muted">Crafting code with clarity and culture</p>
      </header>

      <div className="row justify-content-center align-items-center">
        {/* Profile Card */}
        <div className="col-lg-10">
          <div className="card border-0 shadow-sm p-4 rounded-4">
            <div className="row g-4 align-items-center">
              {/* Profile Image */}
              <div className="col-md-4 text-center">
                <div
                  className="mx-auto rounded-circle overflow-hidden border border-2 border-light shadow"
                  style={{ width: "220px", height: "220px" }}
                >
                  <img
                    src="/media/profile pic.jpg"
                    alt="Pankaj Dey"
                    className="img-fluid h-100 w-100"
                    style={{ objectFit: "cover", objectPosition: "top center" }}
                  />
                </div>
                <h5 className="mt-3 fw-semibold">Pankaj Dey</h5>
                <p className="text-muted small">Full Stack Developer</p>
              </div>

              {/* Bio Section */}
              <div className="col-md-8">
                <div className="text-muted lh-lg">
                  <p>
                    I'm a full stack developer with a passion for building clean,
                    scalable web applications. I work primarily with the MERN stack
                    and have experience integrating both SQL and NoSQL databases to
                    meet diverse project needs.
                  </p>
                  <p>
                    My frontend toolkit includes Bootstrap and Material UI, which I
                    use to craft responsive, intuitive interfaces. Whether it's
                    backend logic or UI design, I focus on precision, performance,
                    and user experience.
                  </p>
                  <p>
                    Outside of coding, I recharge through sports— Basketball,
                    volleyball, and cricket keep me sharp, collaborative, and always
                    ready for the next challenge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
