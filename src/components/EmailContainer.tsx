import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { useFilter } from "../hooks/useFilter";
import { Query } from "../generated/graphql";
import { ALL_MEMBERS_QUERY } from "../queries/AllMembersQuery";
import EmailList from "./EmailList";
import FilterInput from "./FilterInput";

export default function EmailContainer() {
  const [filter, setFilter] = useFilter();

  const { loading, error, data } = useQuery<Query>(ALL_MEMBERS_QUERY, {
    variables: {
      filter: filter,
    },
  });
  return (
    <>
      <p>
        {error ? (
          <span>error... {error.message}</span>
        ) : (
          <EmailList loading={loading} data={data}></EmailList>
        )}
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
    </>
  );
}
