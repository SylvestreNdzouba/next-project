import RepositoryDetails from "@/app/components/repositoryDetails";

const Page = async ({ params }) => {
  const { repository } = params;

  return <RepositoryDetails repositoryName={repository} />;
};

export default Page;
