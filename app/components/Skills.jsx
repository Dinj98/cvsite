"use client";
import { useState, useEffect } from "react";
import SkillComp from "./SkillComp";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
import Loading from "./Loading";
// import ReactWOW from "react-wow";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        // const response = await fetch(
        //   "https://jsonplaceholder.typicode.com/users"
        // );
        const response = await fetch("http://localhost:3010/skills", {
          next: { revalidate: 20 },
        });
        if (!response.ok) {
          throw new Error(
            "Network response was not ok: " + response.statusText
          );
        }
        const data = await response.json();
        setSkills(data);
        console.log("revalidate done!");
      } catch (error) {
        console.error("Error fetching skills:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchSkills();
  }, []);
  console.log(skills);
  console.log(loading);

  return (
    <div className=" gap-4 mt-4 h-screen w-screen">
      {loading ? (
        <div className=" mb-10">
          <Loading />
        </div>
      ) : (
        <div className="grid grid-cols-2">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-white text-red-500 grid grid-cols-2"
            >
              <SkillComp skill={skill} />
              {/* <ReactWOW animation="fadeIn"> */}
              <SkillComp skill={skill} />
              {/* </ReactWOW> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Skills;
