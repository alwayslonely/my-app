'use client'
import { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)
    
    return (
        <div>
            <div className="text-2xl mb-4">{count}</div>
            <button 
                className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-md"
                onClick={() => setCount(count + 1)}
            >
                增加
            </button>
        </div>
    )
}