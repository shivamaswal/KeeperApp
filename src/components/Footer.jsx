import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} - Created by Shivam with ❤️‍🩹</p>
    </footer>
  );
}

export default Footer;
