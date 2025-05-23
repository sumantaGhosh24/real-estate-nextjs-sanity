"use client";

import Image from "next/image";

interface AgentProfileProps {
  agent: {
    _id: string;
    name: string;
    image: any;
    email?: string;
    phone?: string;
    bio?: string;
  };
}

export default function AgentProfile({agent}: AgentProfileProps) {
  if (!agent) return null;

  return (
    <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
        {agent.image && (
          <Image
            src={agent.image.asset.url}
            alt={agent.name}
            fill
            className="object-cover"
          />
        )}
      </div>
      <h3 className="text-xl font-semibold mb-1">{agent.name}</h3>
      {agent.bio && (
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 text-center">
          {agent.bio}
        </p>
      )}
      <div className="w-full mt-2 flex items-center justify-between">
        {agent.phone && (
          <p className="flex items-center text-sm text-lg font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            {agent.phone}
          </p>
        )}
        {agent.email && (
          <p className="flex items-center text-sm text-lg font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            {agent.email}
          </p>
        )}
      </div>
    </div>
  );
}
