import { useEffect, useRef} from 'react';

export function useRenderCount(name) {
    const renderCount = useRef(0);
    useEffect(() => {
        console.log(`${name} mount`)
        return () => {
            console.log(`${name} unmount`)
        }
    },[]);
    useEffect(() => {
        renderCount.current += 1;
        console.log(`${name} render ${renderCount.current}`)
    });

    return renderCount;
}
