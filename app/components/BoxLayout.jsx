import React from "react";

function BoxLayout({ children }) {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <section className="mx-auto w-full max-w-screen-md py-3 md:top-6 md:rounded-3xl lg:max-w-screen-lg">
        <div className="container mx-auto p-4"> {children}</div>
      </section>
    </main>
  );
}

export default BoxLayout;
