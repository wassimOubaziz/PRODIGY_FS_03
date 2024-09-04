import { cuisineList } from "@/config/restaurant-options-config";
import { Label } from "./ui/label";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { ChangeEvent } from "react";
import { Button } from "./ui/button";

type Props = {
  onChange: (cuisines: string[]) => void;
  selectedCuisines: string[];
  isExpanded: boolean;
  onExpandedClick: () => void;
};

const CuisineFilter = ({
  onChange,
  selectedCuisines,
  isExpanded,
  onExpandedClick,
}: Props) => {
  const handleCuisinesChange = (event: ChangeEvent<HTMLInputElement>) => {
    const clickedCuisine = event.target.value;
    const isChecked = event.target.checked;

    const newCuisinesList = isChecked
      ? [...selectedCuisines, clickedCuisine]
      : selectedCuisines.filter((cuisine) => cuisine !== clickedCuisine);

    onChange(newCuisinesList);
  };

  const handleCuisinesReset = () => onChange([]);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <div className="text-lg font-semibold">Filter By Cuisine</div>
        <button
          onClick={handleCuisinesReset}
          className="text-sm font-semibold underline text-teal-600 hover:text-teal-700"
        >
          Reset Filters
        </button>
      </div>

      <div className="mt-3 space-y-2 flex flex-col">
        {cuisineList
          .slice(0, isExpanded ? cuisineList.length : 7)
          .map((cuisine) => {
            const isSelected = selectedCuisines.includes(cuisine);
            return (
              <div key={cuisine} className="flex items-center">
                <input
                  id={`cuisine_${cuisine}`}
                  type="checkbox"
                  className="hidden"
                  value={cuisine}
                  checked={isSelected}
                  onChange={handleCuisinesChange}
                />
                <Label
                  htmlFor={`cuisine_${cuisine}`}
                  className={`flex flex-1 items-center cursor-pointer text-sm rounded-full px-4 py-2 font-semibold transition-colors duration-200 ${
                    isSelected
                      ? "border border-teal-600 text-teal-600 bg-teal-50"
                      : "border border-gray-300 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {isSelected && (
                    <Check size={20} strokeWidth={3} className="mr-2" />
                  )}
                  {cuisine}
                </Label>
              </div>
            );
          })}

        <Button
          onClick={onExpandedClick}
          variant="link"
          className="mt-4 flex items-center justify-center text-teal-600 hover:text-teal-700"
        >
          {isExpanded ? (
            <span className="flex flex-row items-center">
              View Less <ChevronUp className="ml-1" />
            </span>
          ) : (
            <span className="flex flex-row items-center">
              View More <ChevronDown className="ml-1" />
            </span>
          )}
        </Button>
      </div>
    </div>
  );
};

export default CuisineFilter;
