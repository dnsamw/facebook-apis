import { useEffect, useState } from "react";
import "./fb-group-picker.css";

interface Group {
  id: string;
  name: string;
  coverImg: string;
  membersCount: string;
}

export default function FBGroupSelector() {
  const fbGroups = [
    {
      id: "254354",
      name: "Sri Lankan Actresses Fan Club",
      coverImg: "/images/piumi-boteju.jpg",
      membersCount: "340k",
    },
    {
      id: "797979",
      name: "Sri Lankan Teledrama Fan Club",
      coverImg: "/images/sirasa-tv.jpg",
      membersCount: "154k",
    },
    {
      id: "234244",
      name: "Nirosha Virajini Fans Club",
      coverImg: "/images/nirosha-virajini.jpg",
      membersCount: "19k",
    },
    {
      id: "079979",
      name: "Shalani Tharaka Fans Club",
      coverImg: "/images/shalani-tharaka.jpg",
      membersCount: "2.1k",
    },
  ];

  const [activeDropdown, setActiveDropdown] = useState(false);
  const [selectedFBGroup, setSelectedFBGroup] = useState<Group | null>(null);

  const handleDropdownClick = () => {
    setActiveDropdown((prevActive) => !prevActive);
  };

  const handleOptionClick = (fbgroup) => {
    // Handle the selected group here
    console.log("Selected group:", fbgroup);
    console.log("Selected isActive?:", activeDropdown);

    setSelectedFBGroup(fbgroup);
    setActiveDropdown(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".wrapper-dropdown")) {
        setActiveDropdown(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div className="center">
        <div className="group-picker-container">
          <div className="setting-description">
            <div
              className="setting-description-text"
              style={{ marginLeft: 15 }}
            >
              <span>Your Facebook Groups</span>
            </div>
          </div>
          <div
            className={`wrapper-dropdown ${activeDropdown ? "active" : ""}`}
            id="dropdown"
            onClick={handleDropdownClick}
          >
            <span className="selected-display" id="destination">
              {selectedFBGroup === null
                ? "Select a group"
                : Object.keys(selectedFBGroup).length === 0
                ? "Select a group"
                : selectedFBGroup.name}
            </span>
            <svg
              className={`arrow ${activeDropdown ? "rotated" : ""}`}
              id="drp-arrow"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 14.5l5-5 5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <ul className="dropdown">
              {fbGroups.map((fbgroup) => (
                <div
                  className="fb-group-item"
                  key={fbgroup.id}
                  onClick={() => handleOptionClick(fbgroup)}
                >
                  <li className="item" id={fbgroup.id}>
                    <img src={fbgroup.coverImg} />
                    <span>
                      {fbgroup.name} - <b>{fbgroup.membersCount}</b>
                    </span>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
