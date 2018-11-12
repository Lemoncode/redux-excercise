import { actionsEnums } from '../common/actionsEnums';
import { MemberEntity } from '../model/member';
import { memberAPI } from '../api/member';

export const memberRequestCompleted = (members: MemberEntity[]) => {
  return {
    type: actionsEnums.MEMBER_REQUEST_COMPLETED,
    payload: members
  }
}

export const memberRequest = () => (dispatcher) => {
  const promise = memberAPI.getAllMembers('lemoncode');

  promise.then(
    (data) => dispatcher(memberRequestCompleted(data))
  );

  return promise;
}
