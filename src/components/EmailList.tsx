import React from "react";
import EmailItem from "./EmailItem";

export default function EmailList({ data, loading }) {
  if (loading) {
    return <span>Loading...</span>;
  } else if (data) {
    if (data.allMembers.length === 0) {
      return <span>No Results</span>;
    } else {
      return data.allMembers.map((a, i) => {
        return (
          <EmailItem
            key={i}
            user={a}
            color={data.allMembers.length % 2 === 0 ? "red" : "green"}
          />
        );
      });
    }
  }
}
