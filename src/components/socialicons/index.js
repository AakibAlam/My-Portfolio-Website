import React from "react";
import "./style.css";
import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <>
      <div className="stick_follow_icon">
        <ul>
          {socialprofils.github && (
            <li>
              <a href={socialprofils.github}>
                <FaGithub />
              </a>
            </li>
          )}
          {socialprofils.linkedin && (
            <li>
              <a href={socialprofils.linkedin}>
                <FaLinkedin />
              </a>
            </li>
          )}
        </ul>
        <p>Find me on </p>
      </div>
      <p
        className="footer justify-content-center"
        style={{ textAlign: "center" }}
      >
        {socialprofils.copyright}
      </p>
    </>
  );
};
