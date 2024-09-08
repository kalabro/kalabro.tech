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
          I'm a Full Stack Developer and Engineering Mentor, obsessed with
          regular expressions, books, and web technologies. In my work, I mix
          old with new, soft with hard, cats with dogs. When it's not a
          disaster, it's pure magic!
        </p>
        <p>
          <a href="https://www.linkedin.com/in/kalabro/">LinkedIn</a> ~{" "}
          <a href="https://twitter.com/kalabro">Twitter</a> ~{" "}
          <a href="https://hachyderm.io/@kalabro">Mastodon</a>
        </p>
      </div>
    </div>
  )
}

export default Bio
