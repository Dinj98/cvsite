import React from "react";

const Footer = () => {
  return (
    <div className="text-center bg-my-orange flex  justify-around text-2xl">
      <div className="my-4">
        <div className="border-b-2 border-black my-2 py-2">Information</div>
        <div className="text-xl text-gray-200 flex [&>*]:px-2">
          <div className="text-gray-900 text-2xl">name :</div>
          <div>deanj</div>
        </div>
        <div className="text-xl text-gray-200 flex [&>*]:px-2">
          <div className="text-gray-900">email :</div>
          <div>www.deanj7798@gmail.com</div>
        </div>
        <div className="text-xl text-gray-200 flex [&>*]:px-2">
          <div className="text-gray-900">number :</div>
          <div>+989918457264</div>
        </div>
      </div>
      <div>
        <div className="my-4">
          <div className="border-b-2 border-black my-2 py-2">contact us</div>
          <div className="text-xl text-gray-200 flex [&>*]:px-2">
            <div className="text-gray-900">email :</div>
            <div>deanj@gmail.com</div>
          </div>
          <div className="text-xl text-gray-200 flex [&>*]:px-2">
            <div className="text-gray-900">team :</div>
            <div>dj.soley</div>
          </div>
          <div className="text-xl text-gray-200 flex [&>*]:px-2">
            <div className="text-gray-900">skill :</div>
            <div>web programmer</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
