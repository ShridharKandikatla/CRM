import React, { useEffect, useState } from "react";
import useAxios from "../customHooks/useAxios";
import url from "../../url";
import { useRecoilState } from "recoil";
import { studentAtom } from "../store/atoms/student";

const HomePageButton = () => {
  const { loading, error, sendRequest } = useAxios();
  const [countData, setCountData] = useState([]);
  const [student, setStudent] = useRecoilState(studentAtom);

  const getCount = (diposition) => {
    const buttonCount = countData.find(
      (item) => item.diposition === diposition
    );
    return buttonCount ? buttonCount._count : 0;
  };

  const BtnName = [
    {
      id: 0,
      name: "All",
      action: () => handleButtonClick("All"),
    },
    {
      id: 1,
      name: "New",
      action: () => handleButtonClick("New"),
      count: getCount("01 - New"),
    },
    {
      id: 2,
      name: "New (Overdue)",
      action: () => handleButtonClick("New (Overdue)"),
    },
    {
      id: 3,
      name: "Call back Followup",
      action: () => handleButtonClick("Call back Followup"),
      count: getCount("03-Call Back Followup"),
    },
    {
      id: 4,
      name: "Call Back (Overdue)",
      action: () => handleButtonClick("Call Back (Overdue)"),
    },
    {
      id: 5,
      name: "Interested Followup",
      action: () => handleButtonClick("Interested Followup"),
      count: getCount("05-Inetrested Followup"),
    },
    {
      id: 6,
      name: "Interested (Overdue)",
      action: () => handleButtonClick("Interested (Overdue)"),
    },
    {
      id: 7,
      name: "Prospect",
      action: () => handleButtonClick("Prospect"),
      count: getCount("07-Prospect"),
    },
    {
      id: 8,
      name: "Prospect (Overdue)",
      action: () => handleButtonClick("Prospect (Overdue)"),
    },
    {
      id: 9,
      name: "To Be Enrolled",
      action: () => handleButtonClick("To Be Enrolled"),
      count: getCount("09-To be enrolled"),
    },
    {
      id: 10,
      name: "To Be Enrolled - Old",
      action: () => handleButtonClick("To Be Enrolled - Old"),
    },
    {
      id: 11,
      name: "Recycled",
      action: () => handleButtonClick("Recycled"),
      count: getCount("11-Recycled"),
    },
    {
      id: 12,
      name: "Not Interested",
      action: () => handleButtonClick("Not Interested"),
      count: getCount("13-Not Interested"),
    },
    {
      id: 13,
      name: "Wrong Mobile Number",
      action: () => handleButtonClick("Wrong Mobile Number"),
      count: getCount("15-Wrong Phone Number"),
    },
    {
      id: 14,
      name: "Referred From Me",
      action: () => handleButtonClick("Referred From Me"),
    },
    {
      id: 15,
      name: "Re-Equired",
      action: () => handleButtonClick("Re-Equired"),
    },
  ];

  const handleButtonClick = (buttonName) => {
    console.log(buttonName);
    const token = localStorage.getItem("token");
    switch (buttonName) {
      case "All":
        fetch(url + "student/get", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify({ pageNumber: 1 }),
        }).then(async (res) => {
          const data = await res.json();
          setStudent(data);
        });
        break;
      case "New":
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await sendRequest("get", url + "student/count");
        console.log(response);
        setCountData(response);
      } catch (error) {
        console.error("Error fetching count data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="pb-3 mx-4">
      {BtnName.map((Menu) => (
        <button
          key={Menu.id}
          type="button"
          className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-1.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
          onClick={Menu.action}
        >
          {Menu.name} {Menu.count ? `(${Menu.count})` : "(0)"}
        </button>
      ))}
    </div>
  );
};

export default HomePageButton;
