// @flow

type Props = {
  useRefinementList: (props: any) => void;
};

const RefinementListProxy = ({ useRefinementList, ...props }: Props) => {
  // Just a trick to have an empty component that keeps this
  // facet mounted, while the GUI element mounts and unmounts
  useRefinementList(props);

  return null;
};

export default RefinementListProxy;
