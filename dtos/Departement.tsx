type DeptData = {
  image: string;
  title: string;
  description: string;
  gradient: [string, string];
  metrics?: {
    left: {
      value: string;
      label: string;
    };
    right: {
      value: string;
      label: string;
    };
  };
};
