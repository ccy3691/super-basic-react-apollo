import { gql } from "apollo-boost";

export const USER_FRAGMENT = gql`
  fragment MemberInfo on Member {
    email
    name
  }
`;
