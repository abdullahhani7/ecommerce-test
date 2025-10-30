import type { TLoading } from "@customTypes/shared";

type LoadingProps = {
  loading: TLoading;
  error: null | string;
  children: React.ReactNode;
};

const Loading = ({ loading, error, children }: LoadingProps) => {
  if (loading === "pending") {
    return <p>loading please wait...</p>;
  }

  if (loading === "failed") {
    return <p>{error}</p>;
  }

  return <div>{children}</div>;
};

export default Loading;
