import { gql } from "apollo-boost";
import { USER_FRAGMENT } from "../fragments/MemberInfoFragment";

export const ALL_MEMBERS_QUERY = gql`
  query allMembers($filter: MemberFilter) {
    allMembers(filter: $filter) {
      ...MemberInfo
    }
  }
  ${USER_FRAGMENT}
`;
