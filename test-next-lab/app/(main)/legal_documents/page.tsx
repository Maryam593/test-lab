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
  </>);
};

export default LegalDocuments;