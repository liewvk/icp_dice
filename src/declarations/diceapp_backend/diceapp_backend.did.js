export const idlFactory = ({ IDL }) => {
  return IDL.Service({ 'getNumber' : IDL.Func([], [IDL.Nat], []) });
};
export const init = ({ IDL }) => { return []; };
