import React, { Component, useEffect, useRef } from "react";
import { Scrollbars } from "react-custom-scrollbars";

const renderThumb = ({ style, ...props }) => {
  const thumbStyle = {
    borderRadius: 6,
    backgroundColor: "rgba(35, 49, 86, 0.8)",
  };
  return <div style={{ ...style, ...thumbStyle }} {...props} />;
};

const CustomScrollbar = (props) => {
  const scrollRef = useRef();
  const { scrolltobottom } = props;

  useEffect(() => {
    if (scrolltobottom) scrollRef.current.scrollToBottom();
  }, [scrolltobottom]);
  return (
    <Scrollbars
      renderThumbHorizontal={renderThumb}
      renderThumbVertical={renderThumb}
      ref={scrollRef}
      {...props}
    />
  );
};

export default CustomScrollbar;
