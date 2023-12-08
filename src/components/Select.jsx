import { IoIosArrowDown } from "react-icons/io";
import { twMerge } from "tw-merge";

export function Select({ title, options,className, onChange,value }) {
  return (
    <div className="relative  dark:text-black">
      <select
      onChange={(e)=>onChange(e.target.value)}
        value={value||""}
        className={twMerge(
          `w-24  p-4 appearance-none border border-gray-300 bg-white ${className}`)}
      >
        <option value="" disabled hidden>
          {title}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex-center pr-3 ">
        <IoIosArrowDown />
      </div>
    </div>
  );
}
