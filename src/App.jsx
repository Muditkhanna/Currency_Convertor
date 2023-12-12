import { useState } from 'react'
import { InputBox } from './components'
import './App.css'
import usecurrencyinfo from './hooks/usecurrencyinfo'
function App() {
  const [amount,setamount]=useState(0);
  const [from,setfrom]=useState("usd");
  const [to,setto]=useState("inr");
  const [convertedamount,setconvertedamount]=useState(0);
  const currencyinfo=usecurrencyinfo(from)
  const options=Object.keys(currencyinfo)
  
  const swap=()=>{
    setfrom(to);
    setto(from);
    setconvertedamount(amount)
    setamount(convertedamount);
  }
  
  const convert=()=>{
    setconvertedamount(amount*currencyinfo[to])
  }
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/09f829b6-4893-41d4-8e34-c561535ff375/d18qz0b-233ba4cb-06a7-4e8b-a326-8c7a2a0e2182.jpg/v1/fit/w_800,h_500,q_70,strp/time_is_money_by_bozar88_d18qz0b-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTAwIiwicGF0aCI6IlwvZlwvMDlmODI5YjYtNDg5My00MWQ0LThlMzQtYzU2MTUzNWZmMzc1XC9kMThxejBiLTIzM2JhNGNiLTA2YTctNGU4Yi1hMzI2LThjN2EyYTBlMjE4Mi5qcGciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ixvcWdbaGtqGKIA4g85hriPlTISV5nCElP9MoG0WRJM')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onAmountchange={(amount)=>setamount(amount)}
                        
                            oncurrencychange={(currency)=>setamount(amount)}
                            selectcurrency={from}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedamount}
                            currencyOptions={options}
                            oncurrencychange={(currency)=>setto(currency)}
                            selectcurrency={to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                      Convert {from.toUpperCase()} to {to.toUpperCase()} 
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
