import React from "react";

function Footer() {
  return (
    <div class="d-flex justify-content-center gap-5 pb-6 bg-light">
      <footer className="text-center text-lg-start bg-light text-muted">
        <div className="row mt-3">
          <h4>Las ramas del conocimiento.</h4>
        </div>
        <div className="text-center p-2">
          © Copyright:
          <a className="text-reset fw-bold" title="/">
            Tree Academy
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
