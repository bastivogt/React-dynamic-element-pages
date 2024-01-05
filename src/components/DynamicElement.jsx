import React from "react";

export default function DynamicElement({ is, children, ...props }) {
  const Element = is;
  return <Element {...props}>{children}</Element>;
}
