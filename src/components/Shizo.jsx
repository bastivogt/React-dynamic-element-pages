import React from "react";

export default function Shizo({ is, children, ...props }) {
  return React.createElement(is, { ...props }, children);
}
