'use client';
import { ChangeEvent, useState } from "react";
import { ingredients }  from "./ing.js";
import Link from 'next/link';
import { drinkList } from "../ingredients/drinklist";

interface Ingredient {
    id: string;
    title: string;
    // Add other properties if necessary
}
interface Drink {
    id: string;
    title: string;
    ingredients: string[];
    desc: string[];
    diff: string;
}

export default function checkbox() {

    const [checkedItems, setCheckedItems] = useState<Ingredient[]>([]);
    const [drinks, setDrinks] = useState<Drink[]>([])

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, ing: Ingredient) => {
        if (event.target.checked) {
            setCheckedItems(prevItems => [...prevItems, ing]);
        } else {
            setCheckedItems(prevItems => prevItems.filter(item => item.id !== ing.id));
        }
    };

    function generateDrinks(ingList: Ingredient[]) {
        setDrinks(drinkList(ingList))
    }

    function unCheckAll() {
        setCheckedItems([])
    }

    return (
<div className="flex flex-col items-center gap-8 pt-8">
    <div className="flex flex-row items-center justify-between w-full px-4">
        <Link href='/' className="text-white bg-red-700 rounded-md shadow-md px-2 hover:bg-red-900 hover:transform hover:-translate-y-1 transition duration-300">Back</Link>
        <div className="text-2xl text-white">Check Off Each Ingredient You Have!</div>
        <div className=""></div>
    </div>
    <Link className="text-white bg-green-700 rounded-md shadow-md px-2 hover:bg-green-900 hover:transform hover:-translate-y-1 transition duration-300" href="/ingredients">Click Here For Typed Version</Link>
    <button onClick={() => unCheckAll()} className="text-white bg-red-700 rounded-md shadow-md px-2 hover:bg-red-900 hover:transform hover:-translate-y-1 transition duration-300">Clear All</button>
    <div className="flex flex-col gap-3">
        {ingredients.map((ing) => {
        return (
            <div key={ing.id} className="flex items-center gap-3">
                <input 
                    type="checkbox" 
                    id={`ingredient_${ing.id}`} 
                    className="form-checkbox h-10 w-10 text-blue-500" 
                    onChange={(event) => handleCheckboxChange(event, ing)}
                    checked={checkedItems.some(item => item.id === ing.id)} // Control the checked state
                />
                <label className="text-white text-xl">{ing.title}</label>
            </div>
        )
        })}
    </div>
    <button onClick={() => generateDrinks(checkedItems)} className="text-white bg-red-700 rounded-md shadow-md px-3 py-1 hover:bg-red-900 hover:transform hover:-translate-y-1 transition duration-300">Generate Drinks!</button>
    <div className="flex flex-col gap-2 w-5/6">
            {drinks.length === 0 && (<div className="text-white self-center">No Drinks Listed</div>)}
            {drinks.map((drink) => {
                return (
                    <>
                    <div className="bg-slate-600 flex justify-between items-center gap-2 text-white rounded-md shadow-md px-3 py-1">
                      <div className="text-2xl">{drink.title}</div>
                      <div className="">
                      {drink.diff === "Easy" && (
                        <div className="text-2xl text-green-600">Easy</div>
                      )}
                      {drink.diff === "Medium" && (
                        <div className="text-2xl text-orange-600">Medium</div>
                      )}
                      {drink.diff === "Advanced" && (
                        <div className="text-2xl text-red-600">Advanced</div>
                      )}
                      </div>
                    </div>
                    {drink.desc.map((descText) => {
                        return (
                            <div className="text-white text-lg">{descText}</div>
                        )
                    })}
                    </>
                )
            })}
            </div>
    <div className="pb-6">{/*Empty Div*/}</div>
</div>
    )
}