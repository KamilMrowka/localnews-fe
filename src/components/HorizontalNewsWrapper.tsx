import React from 'react';

interface HorizontalNewsWrapperProps {
    children?: React.ReactNode;
}

export default function HorizontalNewsWrapper({ children }: HorizontalNewsWrapperProps) {
    return (
        <div>
            {children}
        </div>
    );
}