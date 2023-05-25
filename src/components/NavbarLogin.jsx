import React, { useState } from 'react'
import Avatar from "../assets/images/Workspace/Avatar.svg"
import JoinWorkspacePopup from '../pop-up/JoinWorkspacePopup';
import { ProfilePopup } from '../pop-up/ProfilePopup';

export default function NavbarLogin() {
const [joinWorkspace, setJoinWorkspace] = useState(false);
const [profile, setProfile] = useState(false);
  return (
    <div>
        <div className='w-full flex justify-end left-0 h-[70px] z-20'> 
              <div onClick={() => setJoinWorkspace(!joinWorkspace)} className="flex justify-center items-center border-2 mr-3 mt-5 border-[#526581] rounded  w-[75px] h-[37px] text-[#1E9CEF] font-medium  hover:cursor-pointer">+Join</div>
              <div>
                      <ProfilePopup></ProfilePopup>
              </div>

              {joinWorkspace && (
                    <div>
                           <JoinWorkspacePopup></JoinWorkspacePopup>
                    </div>
              )}

              {profile && (
                    <div>
                           <ProfilePopup></ProfilePopup>
                    </div>
              )}
        </div>
    </div>
    
  )
}
