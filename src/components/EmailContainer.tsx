import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { useFilter } from "../hooks/useFilter";
import { Query } from "../generated/graphql";
import { ALL_MEMBERS_QUERY } from "../queries/AllMembersQuery";
import List from "./List";
import FilterInput from "./FilterInput";
import EmailItem from "./EmailItem";

export default function EmailContainer() {
  const [filter, setFilter] = useFilter();

  const { loading, error, data } = useQuery<Query>(ALL_MEMBERS_QUERY, {
    variables: {
      filter: filter,
    },
  });
  return (
    <div className="m-4">
      <p>
        {
          <List loading={loading} error={!!error}>
            {data?.allMembers.map((a, i) => {
              return <EmailItem
              key={i}
              user={a}
              color={data.allMembers.length % 2 === 0 ? "red" : "green"}
            />
            })}
          </List>
        }
      </p>
      <FilterInput
        label="Email"
        filterValue="email_contains"
        callback={setFilter}
      />
      <br />
      <FilterInput
        label="Name"
        filterValue="name_contains"
        callback={setFilter}
      />
    </div>
  );
}
