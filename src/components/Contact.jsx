import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screenflex flex flex-col justify-center items-center py-20 text-white">
      <h1 className="text-white font-bold text-5xl uppercase mx-auto text-center mb-10">
        FAQ
      </h1>
      <div
        tabIndex="0"
        className="collapse w-4/5 border rounded-box  border-base-300 mb-4 bg-solid"
      >
        <div className="collapse-title text-xl font-medium text-green-400">
          how to win with us?
        </div>
        <div className="collapse-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            dolores deserunt ea doloremque natus error, rerum quas odio quaerat
            nam ex commodi hic, suscipit in a veritatis pariatur minus
            consequuntur! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quae dolores deserunt ea doloremque natus error, rerum quas
            odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur
            minus consequuntur!
          </p>
        </div>
      </div>
      <div
        tabIndex="0"
        className="collapse w-4/5 border rounded-box border-base-300 mb-4 bg-solid"
      >
        <div className="collapse-title text-xl text-green-400 font-medium">
          How to create an account?
        </div>
        <div className="collapse-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            dolores deserunt ea doloremque natus error, rerum quas odio quaerat
            nam ex commodi hic, suscipit in a veritatis pariatur minus
            consequuntur!
          </p>
        </div>
      </div>
      <div
        tabIndex="0"
        className="collapse w-4/5 border rounded-box border-base-300 mb-4 bg-solid"
      >
        <div className="collapse-title text-xl text-green-400 font-medium">
          How to withdraw my balance?
        </div>
        <div className="collapse-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            dolores deserunt ea doloremque natus error, rerum quas odio quaerat
            nam ex commodi hic, suscipit in a veritatis pariatur minus
            consequuntur!
          </p>
        </div>
      </div>
      <div
        tabIndex="0"
        className="collapse w-4/5 border rounded-box border-base-300 bg-solid"
      >
        <div className="collapse-title text-xl text-green-400 font-medium">
          How to load money?
        </div>
        <div className="collapse-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            dolores deserunt ea doloremque natus error, rerum quas odio quaerat
            nam ex commodi hic, suscipit in a veritatis pariatur minus
            consequuntur!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
