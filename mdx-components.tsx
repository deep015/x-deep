// mdx-components.tsx
import type { MDXComponents } from 'mdx/types';
import React from 'react';

// Export components so it can be imported elsewhere
export const components: MDXComponents = {
  h1: (props) => <h1 className="text-4xl font-bold my-4" {...props} />,
  h2: (props) => <h2 className="text-3xl font-semibold my-3" {...props} />,
  h3: (props) => <h3 className="text-2xl font-medium my-2" {...props} />,
  p: (props) => <p className="text-base leading-7 my-2" {...props} />,
  a: (props) => (
    <a
      className="text-blue-600 hover:underline"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  ul: (props) => <ul className="list-disc ml-6 my-2" {...props} />,
  ol: (props) => <ol className="list-decimal ml-6 my-2" {...props} />,
  li: (props) => <li className="my-1" {...props} />,
  code: (props) => (
    <code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm" {...props} />
  ),
  pre: (props) => <pre className="bg-gray-100 p-4 rounded my-4 overflow-x-auto" {...props} />,
  blockquote: (props) => <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4" {...props} />,
};

// Optional hook to use inside app
export function useMDXComponents(): MDXComponents {
  return components;
}
