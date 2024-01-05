import React from "react";

export default function Home({ onClick = null }) {
  return (
    <div
      onClick={() => {
        if (typeof onClick === "function") onClick();
      }}
    >
      <h2>Home</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
        assumenda, sequi tempore est corrupti officia et labore eveniet aliquid
        similique id neque cum porro distinctio quos molestias rerum vel soluta
        dolorum architecto! Sequi modi pariatur aut veritatis maxime cumque, ad
        velit placeat consequatur laudantium eligendi laborum expedita nulla
        explicabo praesentium iusto ipsam ea aliquid a veniam blanditiis
        officiis quas corporis! Aliquam sapiente illum quibusdam deserunt
        delectus illo! Excepturi et sed alias debitis rem consequuntur odit ea,
        nihil nesciunt. Error voluptate sunt illum laudantium, ipsa iure veniam
        cum quod suscipit accusantium quisquam. Id nulla eos minima nostrum quos
        cum, cupiditate accusantium!
      </p>
    </div>
  );
}
