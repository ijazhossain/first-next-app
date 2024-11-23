import React from "react";

const DynamicPage = async ({ params, searchParams }) => {
  const { productId } = await params;
  console.log(searchParams);
  return (
    <div>
      <h1>Dynamic page {searchParams.category}</h1>
    </div>
  );
};

export default DynamicPage;
