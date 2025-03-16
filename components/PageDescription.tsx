interface IPageDescriptionProps {
  pageName: string;
  pageDescription: string;
}

const PageDescription = (props: IPageDescriptionProps) => {
  const { pageName, pageDescription } = props;

  return (
    <div className="pt-12 pb-20 flex flex-col items-center justify-center md:pt-16 md:pb-28">
      <div className="max-w-3xl">
        <div className="text-3xl font-semibold text-center mb-6 sm:text-4xl lg:text-5xl">
          {pageName}
        </div>
        <p className="text-gray-500 text-center sm:text-sm md:leading-7 lg:text-base">
          {pageDescription}
        </p>
      </div>
    </div>
  );
};

export default PageDescription;
