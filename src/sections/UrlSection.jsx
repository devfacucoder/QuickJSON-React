import React from 'react';
import TableUrls from '../components/TableUrls';
function UrlSection() {
  return (
    <section className="w-screen min-h-screen bg-slate-800 flex flex-col items-center justify-center">
        <h3 className="text-white text-center text-3xl">Your urls</h3>

      <TableUrls/>
    </section>
  );
}

export default UrlSection;
