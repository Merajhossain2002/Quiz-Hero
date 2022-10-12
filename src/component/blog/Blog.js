import React from "react";

const Blog = () => {
  return (
    <div className="container">
      <div className="border border-primary my-5 p-3 p-sm-5 text-start shadow-lg">
        <h1 className="fw-bold">What is the purpose of React Router?</h1>
        <p className="fw-semibold">
          <strong>Ans: ReactJS</strong> Router is mainly used for developing Single Page Web
          Applications. React Router is used to define multiple routes in the
          application. When a user types a specific URL into the browser, and if
          this URL path matches any 'route' inside the router file, the user
          will be redirected to that particular route.
        </p>
      </div>
      <div className="border border-primary my-5 p-3 p-sm-5 text-start shadow-lg">
        <h1 className="fw-bold">How Does Context Api Works?</h1>
        <p className="fw-semibold">
          <strong>Ans: The React Context API</strong> is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.
        </p>
      </div>
      <div className="border border-primary my-5 p-3 p-sm-5 text-start shadow-lg">
        <h1 className="fw-bold">What is useRef?</h1>
        <p className="fw-semibold">
          <strong>Ans: Essentially, useRef</strong> is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with "myRef" , React will set its .current property to the corresponding DOM node whenever that node changes.
        </p>
      </div>
    </div>
  );
};

export default Blog;
