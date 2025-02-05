"use client"

import { useState, useEffect } from "react"
import { useCookies } from "react-cookie";

export default function MemoAppClient() {
    const [memoContent, setMemoContent] = useState<string>()
    const [cookies, setCookie, removeCookie] = useCookies();
    
    // 編集されたらサーバーから取得できるcookieに保存
    useEffect(() => {
        setCookie('memoContent', memoContent, { path: '/' })
        // alert(cookies.memoContent)
    }, [memoContent])

    useEffect(() => {
        setMemoContent(cookies.memoContent)
        const textArea = document.querySelector('textarea')
        if (textArea) {
            textArea.placeholder = `# MemoApp
入力すると文字列がお使い    の端末に保存されます!
パソコンからならタブ文字    も使えます！`
            textArea.addEventListener('keydown', (e) => {
                if (e.key === 'Tab') {
                    e.preventDefault()
                    const start = textArea.selectionStart
                    const end = textArea.selectionEnd
                    const value = textArea.value
                    textArea.value = value.substring(0, start) + '\t' + value.substring(end)
                    textArea.selectionStart = textArea.selectionEnd = start + 1
                }
            })
        }
    }, [])

    return (
        <div className="container h-svh">
            <textarea className='
            w-svw
            h-full
            bg-inherit
            color-inherit
            text-xl
            leading-7
            px-3 py-2
            ' style={{ tabSize: "50px" }} value={memoContent} onChange={(e) => setMemoContent(e.target.value)} />
        </div>
    )
}