import React, { ReactElement } from "react";

export default function List({ loading, error, children }: {loading: boolean, error:boolean, children: React.ReactNode}) {
  if (loading) {
    return <span>Loading...</span>;
  } else if (error){
    return <span className="text-red-700">Error!</span>
  } else {
    return children as ReactElement<any>;
  }
}
