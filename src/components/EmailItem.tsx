import React from "react";
import styled from "styled-components";

const StyledList = styled.li`
  color: ${({ color }) => color};
`;

export default function EmailItem({ color, user }) {
  return (
    <StyledList color={color}>{user.email + " - " + user.name}</StyledList>
  );
}
