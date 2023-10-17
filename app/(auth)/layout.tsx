import * as React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <h1>HEADER common for login and register pages</h1>
      <div className="h-full bg-red-300 text-white">{children}</div>
    </>
  );
};

export default RootLayout;
