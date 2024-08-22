import React from 'react'
import Avatar from "react-avatar";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";

const Tweet = () => {
  return (
    <div className='border-b border-gray-200'>
      <div>
        <div className="flex p-4">
          <Avatar
            src="https://i.pinimg.com/originals/df/5f/5b/df5f5b1b174a2b4b6026cc6c8f9395c1.jpg"
            size="40"
            round={true}
          />
          <div className="ml-2 w-full">
            <div className="flex items-center ">
              <h1 className="font-bold">Patel</h1>
              <p className="text-gray-500 text-sm ml-1">@patelmernstack . 1m</p>
            </div>

            <div>
              <p>Hello Developers lets connect and grow together.</p>
            </div>

            <div className="flex justify-between my-3">
              <div className="flex items-center">
                <div className="p-2 hover:bg-green-200 rounded-full cursor-pointer">
                  <FaRegComment size="20px" />
                </div>
                <p>0</p>
              </div>
              <div className="flex items-center">
                <div className="p-2 hover:bg-pink-200 rounded-full cursor-pointer">
                  <CiHeart size="24px" />
                </div>
                <p>0</p>
              </div>
              <div className="flex items-center">
                <div className="p-2 hover:bg-yellow-200 rounded-full cursor-pointer">
                  <CiBookmark size="24px" />
                </div>
                <p>0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet