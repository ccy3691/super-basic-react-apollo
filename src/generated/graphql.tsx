import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddToMeetupMembersPayload = {
   __typename?: 'AddToMeetupMembersPayload';
  meetupsMeetup?: Maybe<Meetup>;
  membersMember?: Maybe<Member>;
};

export type CreateMeetup = {
  city: Scalars['String'];
  name: Scalars['String'];
  membersIds?: Maybe<Array<Scalars['ID']>>;
  members?: Maybe<Array<MeetupmembersMember>>;
};

export type CreateMember = {
  email: Scalars['String'];
  name: Scalars['String'];
  meetupsIds?: Maybe<Array<Scalars['ID']>>;
  meetups?: Maybe<Array<MembermeetupsMeetup>>;
};

export type InvokeFunctionInput = {
  name: Scalars['String'];
  input: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type InvokeFunctionPayload = {
   __typename?: 'InvokeFunctionPayload';
  result: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type MeetupPreviousValues = {
   __typename?: 'MeetupPreviousValues';
  city: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type MeetupSubscriptionFilter = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MeetupSubscriptionFilter>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MeetupSubscriptionFilter>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<_ModelMutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<MeetupSubscriptionFilterNode>;
};

export type MeetupSubscriptionFilterNode = {
  city?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  city_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  city_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  city_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  city_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  city_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  city_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  city_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  city_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  city_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  city_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  city_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  city_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  city_not_ends_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  members_every?: Maybe<MemberFilter>;
  members_some?: Maybe<MemberFilter>;
  members_none?: Maybe<MemberFilter>;
};

export type MeetupSubscriptionPayload = {
   __typename?: 'MeetupSubscriptionPayload';
  mutation: _ModelMutationType;
  node?: Maybe<Meetup>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<MeetupPreviousValues>;
};

export type MeetupmembersMember = {
  email: Scalars['String'];
  name: Scalars['String'];
  meetupsIds?: Maybe<Array<Scalars['ID']>>;
  meetups?: Maybe<Array<MembermeetupsMeetup>>;
};

export type MemberPreviousValues = {
   __typename?: 'MemberPreviousValues';
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type MemberSubscriptionFilter = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MemberSubscriptionFilter>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MemberSubscriptionFilter>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<_ModelMutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<MemberSubscriptionFilterNode>;
};

export type MemberSubscriptionFilterNode = {
  email?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  email_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  email_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  email_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  email_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  email_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  email_not_ends_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  meetups_every?: Maybe<MeetupFilter>;
  meetups_some?: Maybe<MeetupFilter>;
  meetups_none?: Maybe<MeetupFilter>;
};

export type MemberSubscriptionPayload = {
   __typename?: 'MemberSubscriptionPayload';
  mutation: _ModelMutationType;
  node?: Maybe<Member>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<MemberPreviousValues>;
};

export type MembermeetupsMeetup = {
  city: Scalars['String'];
  name: Scalars['String'];
  membersIds?: Maybe<Array<Scalars['ID']>>;
  members?: Maybe<Array<MeetupmembersMember>>;
};

export type Mutation = {
   __typename?: 'Mutation';
  createMeetup?: Maybe<Meetup>;
  createMember?: Maybe<Member>;
  updateMeetup?: Maybe<Meetup>;
  updateMember?: Maybe<Member>;
  updateOrCreateMeetup?: Maybe<Meetup>;
  updateOrCreateMember?: Maybe<Member>;
  deleteMeetup?: Maybe<Meetup>;
  deleteMember?: Maybe<Member>;
  addToMeetupMembers?: Maybe<AddToMeetupMembersPayload>;
  removeFromMeetupMembers?: Maybe<RemoveFromMeetupMembersPayload>;
  invokeFunction?: Maybe<InvokeFunctionPayload>;
};


export type MutationCreateMeetupArgs = {
  city: Scalars['String'];
  name: Scalars['String'];
  membersIds?: Maybe<Array<Scalars['ID']>>;
  members?: Maybe<Array<MeetupmembersMember>>;
};


export type MutationCreateMemberArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  meetupsIds?: Maybe<Array<Scalars['ID']>>;
  meetups?: Maybe<Array<MembermeetupsMeetup>>;
};


export type MutationUpdateMeetupArgs = {
  city?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  membersIds?: Maybe<Array<Scalars['ID']>>;
  members?: Maybe<Array<MeetupmembersMember>>;
};


export type MutationUpdateMemberArgs = {
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  meetupsIds?: Maybe<Array<Scalars['ID']>>;
  meetups?: Maybe<Array<MembermeetupsMeetup>>;
};


export type MutationUpdateOrCreateMeetupArgs = {
  update: UpdateMeetup;
  create: CreateMeetup;
};


export type MutationUpdateOrCreateMemberArgs = {
  update: UpdateMember;
  create: CreateMember;
};


export type MutationDeleteMeetupArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteMemberArgs = {
  id: Scalars['ID'];
};


export type MutationAddToMeetupMembersArgs = {
  membersMemberId: Scalars['ID'];
  meetupsMeetupId: Scalars['ID'];
};


export type MutationRemoveFromMeetupMembersArgs = {
  membersMemberId: Scalars['ID'];
  meetupsMeetupId: Scalars['ID'];
};


export type MutationInvokeFunctionArgs = {
  input: InvokeFunctionInput;
};

export type RemoveFromMeetupMembersPayload = {
   __typename?: 'RemoveFromMeetupMembersPayload';
  meetupsMeetup?: Maybe<Meetup>;
  membersMember?: Maybe<Member>;
};

export type Subscription = {
   __typename?: 'Subscription';
  Meetup?: Maybe<MeetupSubscriptionPayload>;
  Member?: Maybe<MemberSubscriptionPayload>;
};


export type SubscriptionMeetupArgs = {
  filter?: Maybe<MeetupSubscriptionFilter>;
};


export type SubscriptionMemberArgs = {
  filter?: Maybe<MemberSubscriptionFilter>;
};

export type UpdateMeetup = {
  city?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  membersIds?: Maybe<Array<Scalars['ID']>>;
  members?: Maybe<Array<MeetupmembersMember>>;
};

export type UpdateMember = {
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  meetupsIds?: Maybe<Array<Scalars['ID']>>;
  meetups?: Maybe<Array<MembermeetupsMeetup>>;
};

export enum _ModelMutationType {
  Created = 'CREATED',
  Updated = 'UPDATED',
  Deleted = 'DELETED'
}

export type Meetup = Node & {
   __typename?: 'Meetup';
  city: Scalars['String'];
  id: Scalars['ID'];
  members?: Maybe<Array<Member>>;
  name: Scalars['String'];
  /** Meta information about the query. */
  _membersMeta: _QueryMeta;
};


export type MeetupMembersArgs = {
  filter?: Maybe<MemberFilter>;
  orderBy?: Maybe<MemberOrderBy>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type Meetup_MembersMetaArgs = {
  filter?: Maybe<MemberFilter>;
  orderBy?: Maybe<MemberOrderBy>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type MeetupFilter = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MeetupFilter>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MeetupFilter>>;
  city?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  city_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  city_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  city_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  city_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  city_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  city_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  city_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  city_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  city_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  city_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  city_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  city_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  city_not_ends_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  members_every?: Maybe<MemberFilter>;
  members_some?: Maybe<MemberFilter>;
  members_none?: Maybe<MemberFilter>;
};

export enum MeetupOrderBy {
  CityAsc = 'city_ASC',
  CityDesc = 'city_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

export type Member = Node & {
   __typename?: 'Member';
  email: Scalars['String'];
  id: Scalars['ID'];
  meetups?: Maybe<Array<Meetup>>;
  name: Scalars['String'];
  /** Meta information about the query. */
  _meetupsMeta: _QueryMeta;
};


export type MemberMeetupsArgs = {
  filter?: Maybe<MeetupFilter>;
  orderBy?: Maybe<MeetupOrderBy>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type Member_MeetupsMetaArgs = {
  filter?: Maybe<MeetupFilter>;
  orderBy?: Maybe<MeetupOrderBy>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type MemberFilter = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MemberFilter>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MemberFilter>>;
  email?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  email_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  email_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  email_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  email_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  email_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  email_not_ends_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  meetups_every?: Maybe<MeetupFilter>;
  meetups_some?: Maybe<MeetupFilter>;
  meetups_none?: Maybe<MeetupFilter>;
};

export enum MemberOrderBy {
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
};

export type Query = {
   __typename?: 'Query';
  allMeetups: Array<Meetup>;
  allMembers: Array<Member>;
  _allMeetupsMeta: _QueryMeta;
  _allMembersMeta: _QueryMeta;
  Meetup?: Maybe<Meetup>;
  Member?: Maybe<Member>;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
};


export type QueryAllMeetupsArgs = {
  filter?: Maybe<MeetupFilter>;
  orderBy?: Maybe<MeetupOrderBy>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryAllMembersArgs = {
  filter?: Maybe<MemberFilter>;
  orderBy?: Maybe<MemberOrderBy>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type Query_AllMeetupsMetaArgs = {
  filter?: Maybe<MeetupFilter>;
  orderBy?: Maybe<MeetupOrderBy>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type Query_AllMembersMetaArgs = {
  filter?: Maybe<MemberFilter>;
  orderBy?: Maybe<MemberOrderBy>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryMeetupArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryMemberArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};

/** Meta information about the query. */
export type _QueryMeta = {
   __typename?: '_QueryMeta';
  count: Scalars['Int'];
};


