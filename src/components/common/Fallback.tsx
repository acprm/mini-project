import React from 'react';

interface FallbackProps {
    
}
 
class Fallback extends React.Component<FallbackProps> {
 
    render() { 
        return (  
            <div className='w-full h-screen flex justify-center items-center bg-white'>
                <img src="/icon.svg" alt="Loading" className="animate-spin" height={50} width={50} />
            </div>
        );
    }
}
export default Fallback;