/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { useState } from "react"
import { drinkList } from "./drinklist";
import './ingStyles.css'
//import crypto from 'crypto';

interface Ingredient {
    id: string;
    title: string;
}

interface Drink {
    id: string;
    title: string;
    ingredients: string[];
    desc: string[];
    diff: string;
}

export default function ingredients() {
    const [inputText, setInputText] = useState("")
    const [ingredients, setIngredients] = useState<Ingredient[]>([])
    const [editMode, setEditMode] = useState(false);
    const [drinks, setDrinks] = useState<Drink[]>([])


        function handleSubmit(e: { preventDefault: () => void; }) {
            e.preventDefault()
          
            setIngredients((currentItems: Ingredient[]) => {
                const trimmedText = inputText.trim();

                if (trimmedText === "") {
                    return currentItems;
                }
              return [
                ...currentItems,
                { id: crypto.randomUUID(), title: inputText}
              ]
            })
          
            setInputText("") // Clears search box after each add
        } 
        function editStart(id: string) {
            deleteIngredient(id);
            setEditMode(true);
        }

        function editStop() {
            handleSubmit;
            setEditMode(false);
        }

        function deleteIngredient(id: string) {
            setIngredients((currentItems: Ingredient[]) => {
                return currentItems.filter(indredient => indredient.id !== id)
            }
        )}

        function initDrinks(ingList: Ingredient[]) {
            setDrinks(drinkList(ingList));
        }

        function clearAll() {
            setDrinks([]);
            setIngredients([]);
        }

        if (editMode) {
            return (
            <div className="flex flex-col items-center gap-8 pt-8 bg-violet-200 pb-32">
                <div className="text-2xl">Edit Ingredient</div>
                <div className="">
                    <input type="text" placeholder="Enter New Ingredient" className="rounded-md shadow-md text-lg" value={inputText} onChange={e => setInputText(e.target.value)} />
                </div>
                <div className="">
                    <button onClick={() => editStop()} className="text-xl bg-green-600 rounded-md shadow-lg text-white px-2 py-1 hover:bg-green-800">Done</button>
                </div>
            </div>
            )
        }

    return (
        <div className="flex flex-col items-center gap-8 pt-8 bg-slate-800 pb-32">
            <div className="text-2xl text-white">List of Ingredients</div>
            <form onSubmit={handleSubmit} className="flex gap-2">
                <input className="text-2xl rounded shadow-md" type="text" placeholder="Enter Ingredients" value={inputText} onChange={e => setInputText(e.target.value)}/>
                <button className="text-xl bg-blue-400 rounded-md shadow-lg text-white px-3 py-1 hover:bg-blue-800">Add</button>
                <button className="text-xl bg-red-700 shadow-lg text-white rounded-md px-3 py-1 hover:bg-red-900">Clear</button>
            </form>
            <div className="w-5/6 flex flex-col gap-2">
                {ingredients.length === 0 && (<div className="text-white self-center">No Ingredients Listed</div>)}
                {ingredients.map((ingredient) => {
                    return (
                        <div className="bg-blue-300 flex justify-between items-center gap-2 p-2 rounded-lg shadow-md">
                            <div key={ingredient.id} className="text-lg">{ingredient.title}</div>
                            <div className="flex gap-2">
                                <button onClick={() => editStart(ingredient.id)} className="text-xl bg-blue-400 rounded-md shadow-lg text-white px-1 hover:bg-blue-800">Edit</button>
                                <button onClick={() => deleteIngredient(ingredient.id)} className="text-xl bg-red-600 rounded-md shadow-lg text-white px-1 hover:bg-red-800">Delete</button>
                            </div>
                        </div>
                    )
                })}
                {ingredients.length !== 0 && (
                    <button onClick={() => clearAll()} className="w-1/6 rounded-md bg-red-600 text-white px-1 self-center">Clear All</button>
                )}

            </div>
            <button onClick={() => initDrinks(ingredients)} className="text-xl bg-blue-600 rounded-md shadow-lg text-white px-5 py-2 hover:bg-blue-800">Generate Drinks!</button>
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
        </div>
    )
}