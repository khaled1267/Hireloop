import Navigation from '@/components/Dashbroadsideber';
import React from 'react';

const dashberoadlayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background  flex flex-col md:flex-row ">
      
      <div className="  bg-black border-r border-zinc-800 ">
        <Navigation />
      </div>
      
      <main className="flex-1 w-full md:ml-64 p-6 transition-all duration-300">
        {children}
      </main>

    </div>
  );
};

export default dashberoadlayout;