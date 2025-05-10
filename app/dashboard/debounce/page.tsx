
'use client'
import React, { useState, useEffect } from 'react'

export default function Page() {
    function useDebounce<T>(value: T, delay: number = 300): T {
        const [debouncedValue, setDebouncedValue] = useState<T>(value);
     
        useEffect(() => {
            // 设置定时器
            const timer = setTimeout(() => {
                setDebouncedValue(value);
            }, delay);
     
            // 清理函数
            return () => {
                clearTimeout(timer);
            };
        }, [value, delay]);
     
        return debouncedValue;
    }
     
    // 2. 使用示例：搜索框
    const SearchComponent = () => {
        const [searchText, setSearchText] = useState('');
        const debouncedText = useDebounce(searchText, 500);
        console.log("debouncedText", debouncedText)
    
        // 只有在 debouncedText 变化时才调用 API
        useEffect(() => {
            if (debouncedText) {
                // 发起搜索请求
                console.log(debouncedText)
            }
        }, [debouncedText]);
     
        return (
            <input
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="输入搜索内容"
            />           
        );
    };

    return SearchComponent()
  }