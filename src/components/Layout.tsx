import React from 'react';

const Layout = ({ children }: {children: any}) => {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center space-y-6">
            <h2 className="text-sxl font-bold">React Ws Chat</h2>
            {children}
        </div>
    )
}

export default Layout;