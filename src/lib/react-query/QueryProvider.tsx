import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const queryClinet = new QueryClient();

const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClinet}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
