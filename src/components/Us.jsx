import React from 'react'
const Us = () => {
    return ( 
    <div className="flex flex-col xl:flex-row justify-center items-center text-white mx-10 ">
    <div className="mr-5">
      <p className="uppercase text-4xl font-bold text-green-500 text-center mb-10">
        About US
      </p>
      <p className="text-center text-lg max-w-5xl">
        <span className="text-green-500">L</span>orem ipsum dolor sit amet consectetur adipisicing elit. Quae
          dolores deserunt ea doloremque natus error, rerum quas odio
          quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus
          consequuntur!
      </p>
    </div>
    <div className="max-w-md py-4 px-8 shadow-lg bg-solid rounded-lg my-20">
      <div className="flex justify-center md:justify-end -mt-16">
        <img
          className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
          alt="imgseo"
          src="https://images.unsplash.com/photo-1627371652229-f1e9a41ecff1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
        ></img>
      </div>
      <div>
        <h2 className="text-blue-400 text-3xl font-semibold">Our website</h2>
        <p className="mt-2 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          dolores deserunt ea doloremque natus error, rerum quas odio
          quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus
          consequuntur!
        </p>
      </div>
      <div className="flex justify-end mt-4">
        <a href="/#" className="text-xl font-medium text-indigo-500">
          SEO 
        </a>
      </div>
    </div>
  </div> 
  );
}
 
export default Us;