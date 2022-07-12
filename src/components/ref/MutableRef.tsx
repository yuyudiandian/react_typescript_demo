import {useState,useRef,useEffect} from 'react';

export const MutableRef = () => {
    const [timer,setTimer] = useState<number>(0);
    //这里用ref是因为 ref能记忆数据的同时不刷新视图，很好用
    const inputRef = useRef<number | null>(null);

    const stopTimer = () => {
       if(inputRef.current) {
        window.clearInterval(inputRef.current) 
        console.log('stop timer')
    }
    }

    useEffect( () => {
        inputRef.current = window.setInterval(() => {
            setTimer(timer => timer + 1)
        },1000)

        return () => {
            stopTimer()
        }
    },[])

    return (
        <div>
            HookTimer - {timer} - 
            <button onClick={() => stopTimer()}>Stop Timer</button>
        </div>
    )
}