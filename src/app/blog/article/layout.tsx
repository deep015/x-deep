// app/blog/article/layout.tsx
"use client"
import React from "react";
import { MDXProvider } from "@mdx-js/react";
import Container from "@/app/components/container";
import { components as MDXComponents } from '../../../../mdx-components';

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return (
    <MDXProvider components={MDXComponents}>
      <Container className="min-h-screen p-10 md:pt-26 md:pb-14">
        {children}
      </Container>
    </MDXProvider>
  );
}
