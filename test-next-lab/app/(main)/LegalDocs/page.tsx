"use client";
import React from "react";
import { useState } from "react";
const LegalDocuments = () => {
   const [searchTerm, setSearchTerm] = useState("");
   const onSearchButtonClick = (e:React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    setSearchTerm(value);
    let b = value.trim().toLowerCase();
    const docs: any[] = [];
    docs.filter((doc:any) => {
        doc.title.toLowerCase().includes(b) || doc.content.toLowerCase().includes(b)
    })
   }

  return (<>
  <h1 className="text-center">Legal Documents</h1>
  <div>
    {/* search */}
    <input type="text"  id=""  placeholder="search any legal doc here" value={searchTerm} onChange={onSearchButtonClick} />
  </div>
  {/* polices */}
  <div className = "bg-amber-600">
    <h1>Policies</h1>
    <hr />

  </div>
  {/* permits */}
  <div className = "bg-red-400">
    <h1>Permits</h1>
    <hr />

  </div>
  {/* compliance */}
  {/* permits */}
  <div className = "bg-teal-700">
    <h1>Compliance</h1>
    <hr />

  </div>
  </>);
};

export default LegalDocuments;

// right now this page is separte from home page.. because as from name it is displaying its importance.. its about legal notes.. thats why its in seprate page.. also soon when auth users are set, it will be officially more secure, but right now we assume its an important part of the website and hence hold that importance 