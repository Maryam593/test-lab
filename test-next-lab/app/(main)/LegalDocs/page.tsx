"use client";
import TweetCard from "@/components/kokonutui/tweet-card";
import React, { useState } from "react";

const docs = [
  {
    id: 1,
    name: "Terms and Conditions",
    description: "Our terms of service and legal agreement for using PropStake.",
    category: "policies",
  },
  {
    id: 2,
    name: "Privacy Policy",
    description: "How we collect, use, and protect your personal information.",
    category: "policies",
  },
  {
    id: 3,
    name: "Cookies Policy",
    description: "Information about how we use cookies and similar technologies.",
    category: "policies",
  },
  {
    id: 4,
    name: "Landmark X Propstake",
    description: "Official document of permit for selling units of Landmark.",
    category: "permits",
  },
];

const LegalDocuments = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filterResults = (value: string) => {
    const b = value.trim().toLowerCase();
    return docs.filter(
      (doc) =>
        doc.name.toLowerCase().includes(b) ||
        doc.description.toLowerCase().includes(b)
    );
  };

  return (
    <>
      <h1 className="text-center">Legal Documents</h1>
      <div>
        {/* search */}
        <input
          type="text"
          placeholder="search any legal doc here"
          value={searchTerm}
          onChange={handleSearch}
          className="border p-2 rounded w-full my-2"
        />
      </div>

      {/* policies */}
      <div className="bg-amber-600 p-4 rounded my-4">
        <h2 className="font-bold text-lg">Policies</h2>
        <hr className="my-2" />
        {filterResults(searchTerm)
          .filter((doc) => doc.category === "policies")
          .map((doc) => (
            <TweetCard
              key={doc.id}
              authorName="PropStake"
              authorHandle="@propstake"
              authorImage="/propstake-logo.png"
              content={[doc.description]}
              timestamp={new Date().toISOString()}
              {...doc}
            />
          ))}
      </div>

      {/* permits */}
      <div className="bg-red-400 p-4 rounded my-4">
        <h2 className="font-bold text-lg">Permits</h2>
        <hr className="my-2" />
        {filterResults(searchTerm)
          .filter((doc) => doc.category === "permits")
          .map((doc) => (
            <TweetCard
              key={doc.id}
              authorName="PropStake"
              authorHandle="@propstake"
              authorImage="/propstake-logo.png"
              content={[doc.description]}
              timestamp={new Date().toISOString()}
              {...doc}
            />
          ))}
      </div>

      {/* compliance */}
      <div className="bg-purple-600 p-4 rounded my-4">
        <h2 className="font-bold text-lg">Compliance</h2>
        <hr className="my-2" />
        {filterResults(searchTerm)
          .filter((doc) => doc.category === "compliance")
          .map((doc) => (
            <TweetCard
              key={doc.id}
              authorName="PropStake"
              authorHandle="@propstake"
              authorImage="/propstake-logo.png"
              content={[doc.description]}
              timestamp={new Date().toISOString()}
              {...doc}
            />
          ))}
      </div>
    </>
  );
};

export default LegalDocuments;


// right now this page is separte from home page.. because as from name it is displaying its importance.. its about legal notes.. thats why its in seprate page.. also soon when auth users are set, it will be officially more secure, but right now we assume its an important part of the website and hence hold that importance 