import { solutionsOptions } from "../contants/solutionsDropdownOptions";

export default function SolutionsDropdown() {
  return (
    <div className="fixed top-[72px] left-1/2 -translate-x-1/2 z-50 bg-white shadow-xl rounded-xl p-8 w-[40.625rem] max-w-full">
      <div className="grid grid-cols-2 gap-4">
        {solutionsOptions.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-3 bg-[#ECFDF3] w-[17.75rem] h-[5.875rem] p-2 rounded-md"
          >
            <div className="w-8 h-8 bg-brand-300 rounded-[4px] flex items-center justify-center shrink-0">
              <img src={item.icon} alt="icon" width={14} height={14} />
            </div>
            <div>
              <h4 className="text-greenAccents-600 text-sm font-bold leading-snug mb-1">
                {item.title}
              </h4>
              <p className="text-[#0C2900] font-normal text-xs leading-snug">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
