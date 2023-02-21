import React from "react"

import { rhythm } from "../utils/typography"
import avatarPic from "./kalabro-avatar.jpg"

function Bio() {
  return (
    <div
      style={{
        display: "flex",
        marginBottom: rhythm(2.5),
      }}
    >
      <img
        src={avatarPic}
        alt={`Kate Marshalkina`}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          width: rhythm(5),
          height: rhythm(5),
          borderRadius: "50%",
          flexShrink: 0,
        }}
      />
      <div>
        <h4 style={{ marginTop: rhythm(0.5) }}>
          Hi, I’m Kate{" "}
          <span role="img" aria-label="light bulb">
            💡
          </span>
        </h4>
        <p>
        I love solving problems regardless of the type of work: from basic client support to advanced devops tasks. I do it better when I understand how things work, but sometimes it just feels like magic.
        </p>
        <p>
          <a href="https://twitter.com/kalabro">@kalabro on Twitter</a> ~{" "}
          <a href="https://www.linkedin.com/in/kalabro/">LinkedIn</a>
        </p>
      </div>
    </div>
  )
}

export default Bio
