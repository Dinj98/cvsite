import PieChart from "./PieChart";
import Image from "next/image";

const SkillComp = ({ skill }) => {
  console.log(skill);
  return (
    <div className="flex items-center py-2 justify-between rounded-xl mx-8 mb-8 bg-light-orange text-white font-bold text-xl drop-shadow-2xl hover:drop-shadow-none hover:animate-anime hover:shadow-none transition-colors ease-in-out duration-3000 bg-[#008080] hover:bg-[#007070]">
      <div className="">
        <Image
          className="rounded-full"
          src={skill.imgSkill}
          width={80}
          height={80}
          alt={skill.lang}
        />
      </div>
      <div>
        <div>{skill.lang}</div>
        <div>{skill.id}</div>
      </div>
      <div>
        <PieChart skill={skill} />
      </div>
    </div>
  );
};

export default SkillComp;
