interface ContainerProps {
  children: React.ReactNode;
}

const container = ({ children }: ContainerProps) => {
  return <div className="mx-auto max-w-7xl">{children}</div>;
};

export default container;
