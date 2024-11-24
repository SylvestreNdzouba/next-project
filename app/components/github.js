export const github = async (path) => {
  const response = await fetch(`https://api.github.com${path}`, {
    headers: { Authorization: `token ${process.env.GITHUB_TOKEN}` },
  });
  return response.json();
};
