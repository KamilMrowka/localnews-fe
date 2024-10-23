import React from 'react';

interface HorizontalNewsWrapperProps {
    children?: React.ReactNode;
}

export default function HorizontalNewsWrapper({ children }: HorizontalNewsWrapperProps) {
    return (
        <div className='md:columns-2 lg:columns-3'>
            {children}
        </div>
    );
}