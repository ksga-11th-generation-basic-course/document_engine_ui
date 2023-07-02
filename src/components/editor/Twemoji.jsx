import React from "react";
import twemoji from "twemoji";

function Twemoji({ emoji, className }) {
  const parseEmoji = React.useMemo(
    () =>
      twemoji.parse(emoji, {
        folder: "svg",
        ext: ".svg",
      }),
    [emoji]
  );

  return (
    <span
      className={`w-5 h-5 ${className}`}
      dangerouslySetInnerHTML={{
        __html: parseEmoji,
      }}
    />
  );
}

export default Twemoji;
