type DeptData = {
  image: string;
  modalImage?: string;
  title: string;
  description: string;
  imageWrapperClassName?: string;
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
