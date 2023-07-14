import React, { useEffect, useState } from "react";
import pencil from "../../assets/workspace_image/pencil.svg";
import chevrondown from "../../assets/workspace_image/chevrondown.svg";
import { RemoveMemberModal } from "../../modal/RemoveMemberModal";
// import { Button, Dropdown } from "react-daisyui";
import view from "../../assets/workspace_image/view.svg";
import kickmember from "../../assets/workspace_image/kickmember.svg";
import { setAccessibility } from "../../redux/service/workspaceService/workspaceService";
import { useDispatch, useSelector } from "react-redux";
import { setAccessibilitySuccess } from "../../redux/slice/workspaceSlice/workspaceSlice";
import { getCurrentUser } from "../../redux/service/userService/userService";
import {
  Menu,
  MenuHandler,
  MenuList,
  select,
  // MenuItem,
} from "@material-tailwind/react";
import { Avatar } from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import Menu2 from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import key from "../../assets/document_image/key.svg";
import dotmenu from "../../assets/workspace_image/dotmenu.svg";

export const MemberWorkspaceCard = ({ member, workspaceId }) => {
  const [removeMember, setRemoveMember] = useState(false);

  const [openMenu, setOpenMenu] = React.useState(false);

  const character = member.username.split("");

  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
  ];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  const [workspaceIdProp, setWorkspaceIdProp] = useState();
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  const [userId, setUserId] = useState();
  const [selected, setSelected] = useState("yes");

  const user = useSelector((state) => state.user.user);

  const hanldeKickMember = () => {
    setUserId(member.userId);
    setWorkspaceIdProp(workspaceId);
    setRemoveMember(!removeMember);
  };

  let userIdProp = member.userId;

  const handleSetAccessibility = async (status) => {
    try {
      const member = await setAccessibility(userIdProp, workspaceId, status);
      dispatch(setAccessibilitySuccess(member));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const [anchorE2, setAnchorE2] = React.useState(null);
  const open2 = Boolean(anchorE2);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const secondHandleClick = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const secondHandleClose = () => {
    setAnchorE2(null);
  };

  return (
    <div>
      <div className="flex justify-between items-center w-full space-y-4">
        <div className="flex justify-center items-center gap-x-3 md:gap-x-2.5">
          <div
            className={`w-9 h-9 ${randomColor} flex justify-center items-center rounded-full overflow-hidden md:w-6 md:h-6`}
          >
            {member.profileImage === null ? (
              <p className="font-semibold text-18px text-white md:text-12px">
                {/* {character[0]} */}
                <Avatar
                  variant="circular"
                  alt="candice wu"
                  className="rounded-full w-12 h-12 shadow-md md:w-9 md:h-9"
                  src="https://firebasestorage.googleapis.com/v0/b/docengine-7e623.appspot.com/o/images%2Fprofile%2Fcb6df344-7dd9-4323-8961-cbd55a606e77_user.png?alt=media&token=6eb13cc7-734c-4292-bc74-2ea2b4e6b5c2"
                />
              </p>
            ) : (
              <Avatar
                variant="circular"
                alt="candice wu"
                className="cursor-pointer rounded-full"
                src={member && member.profileImage}
              />
            )}
          </div>
          <h3 className="font-semibold text-18px  md:text-15px">
            {member.username}
          </h3>
          {member.isOwner ? (
            <div>
              <span className="px-6 md:px-2 text-primary bg-[#EDF9FF] rounded-lg md:text-12px">
                Owner
              </span>
            </div>
          ) : null}
          {user.userId === member.userId ? <span>(You)</span> : null}
        </div>

        {/* For Mobile */}
        {!member.isOwner ? (
          <div className="hidden lg:hidden md:inline-block">
            <img
              src={dotmenu}
              className="w-3 h-3 -mt-3"
              onClick={handleClick}
            />
            <Menu2
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              placement="right-start"
              offset={15}
              className="-ml-16 hidden lg:hidden md:inline-block"
            >
              {/* Permission */}
              <MenuItem>
                <Button
                  id="advance-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  placement="right-start"
                  onClick={secondHandleClick}
                  className="relative hidden lg:hidden md:inline-block"
                >
                  <img src={key} className="w-4" />
                  <span className="ml-3 text-12px">Permission</span>
                </Button>

                <Menu2
                  id="advance-menu"
                  anchorE2={anchorE2}
                  open={open2}
                  onClose={secondHandleClose}
                  MenuListProps={{
                    "aria-labelledby": "advance-button",
                  }}
                  className="-mt-[410px] ml-3.5 hidden lg:hidden md:inline-block"
                >
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    className="px-4"
                  >
                    <FormControlLabel
                      value="editor"
                      control={<Radio />}
                      label="Editor"
                      onChange={() => handleSetAccessibility(true)}
                      checked={member.accessibility ?  selected : null}
                    />
                    <FormControlLabel
                      value="viewer"
                      control={<Radio />}
                      label="Viewer"
                      onChange={() => handleSetAccessibility(false)}
                      checked={member.accessibility ?  null: selected}
                    />
                  </RadioGroup>
                </Menu2>
              </MenuItem>

              {/* Remove Member */}
              <MenuItem onClick={handleClose}>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={hanldeKickMember}
                >
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    stroke="#f44336"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  </svg>
                  <span className="text-red-500 ml-3 mt-1 text-12px">
                    Remove
                  </span>
                </Button>
              </MenuItem>
            </Menu2>
          </div>
        ) : null}

        {/* For Laptop & tablet */}
        {!member.isOwner ? (
          <div className="flex justify-center items-center gap-x-4 md:gap-x-2 md:hidden">
            <div className="relative">
              <Menu open={openMenu} handler={setOpenMenu}>
                <MenuHandler>
                  <button className="flex items-center justify-between w-[190px] border-[1px] py-2 px-3 rounded-lg">
                    {member.accessibility ? (
                      <p className="text-18px text-black font-ssp flex gap-x-2">
                        <img src={pencil} alt="" />
                        Editor
                      </p>
                    ) : (
                      <p className="text-18px text-black font-ssp flex gap-x-2">
                        <img src={view} alt="" />
                        Viewer
                      </p>
                    )}
                    <ChevronDownIcon
                      strokeWidth={3}
                      className={`h-4 w-4 transition-transform ${
                        openMenu ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </MenuHandler>
                <MenuList className="rounded-lg p-2 w-[190px] font-ssp z-[9999]">
                  <MenuItem
                    className="flex justify-start items-center p-3 hover:bg-gray-200 rounded-lg gap-x-2"
                    onClick={() => handleSetAccessibility(true)}
                  >
                    <img src={pencil} alt="" />
                    <p className="text-18px text-black">Editor</p>
                  </MenuItem>
                  <MenuItem
                    className="flex justify-start p-3 hover:bg-gray-200 rounded-lg gap-x-2"
                    onClick={() => handleSetAccessibility(false)}
                  >
                    <img src={view} alt="" />
                    <p className="text-18px text-black">Viewer</p>
                  </MenuItem>
                </MenuList>
              </Menu>
              {/* <Dropdown>
                <Dropdown.Toggle>
                  {member.accessibility ? (
                    <div className="text-18px md:text-16px md:gap-x-1 md:px-2 border-[1px] rounded-lg px-3 py-1 flex justify-center items-center gap-x-2">
                      <img className="w-4" src={pencil} />
                      <p>Editor</p>
                      <img className="md:w-4" src={chevrondown} />
                    </div>
                  ) : (
                    <div className="text-18px md:text-16px md:gap-x-1 md:px-2 border-[1px] rounded-lg px-3 py-1 flex justify-center items-center gap-x-2">
                      <img className="w-4" src={view} />
                      <p>Viewer</p>
                      <img className="md:w-4" src={chevrondown} />
                    </div>
                  )}
                </Dropdown.Toggle>
                <Dropdown.Menu className="w-[125px] bg-white rounded-lg">
                  <Dropdown.Item
                    className="flex items-center text-18px md:text-16px"
                    onClick={() => handleSetAccessibility(true)}
                  >
                    <img className="md:w-4" src={pencil} />
                    <span>Editor</span>
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="flex items-center text-18px md:text-16px"
                    onClick={() => handleSetAccessibility(false)}
                  >
                    <img className="md:w-4" src={view} />
                    <span>Viewer</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
            </div>
            <button
              type="button"
              className="px-3 py-2 md:p-1.5 border-[1px] rounded-lg"
              onClick={hanldeKickMember}
            >
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="#f44336"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 6h18"></path>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </button>
          </div>
        ) : null}
      </div>
      <div>
        <RemoveMemberModal
          removeMember={removeMember}
          setRemoveMember={setRemoveMember}
          userId={userId}
          workspaceIdProp={workspaceIdProp}
        />
      </div>
    </div>
  );
};
