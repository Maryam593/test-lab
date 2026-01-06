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

const categoryColors: Record<string, string> = {
  policies: "bg-yellow-100 dark:bg-yellow-900",
  permits: "bg-red-100 dark:bg-red-900",
  compliance: "bg-purple-100 dark:bg-purple-900",
};

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

  const categories = ["policies", "permits", "compliance"];

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200">
        Legal Documents
      </h1>

      {/* search */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search any legal doc here..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full md:w-2/3 p-3 rounded-lg border border-gray-300 dark:border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white"
        />
      </div>

      {categories.map((category) => {
        const filteredDocs = filterResults(searchTerm).filter(
          (doc) => doc.category === category
        );

        if (filteredDocs.length === 0) return null;

        return (
          <div
            key={category}
            className={`p-4 rounded-lg mb-6 ${categoryColors[category]}`}
          >
            <h2 className="text-2xl font-semibold mb-3 capitalize text-gray-800 dark:text-gray-200">
              {category}
            </h2>
            <hr className="mb-4 border-gray-300 dark:border-gray-700" />

            <div className="flex flex-col gap-4">
              {filteredDocs.map((doc) => (
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
          </div>
        );
      })}
    </div>
  );
};

export default LegalDocuments;

// right now this page is separte from home page.. because as from name it is displaying its importance.. its about legal notes.. thats why its in seprate page.. also soon when auth users are set, it will be officially more secure, but right now we assume its an important part of the website and hence hold that importance 