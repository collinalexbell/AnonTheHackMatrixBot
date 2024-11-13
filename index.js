const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    const githubToken = core.getInput('github-token');
    const repo = {
      owner: core.getInput('repo-owner'),
      repo: core.getInput('repo-name'), // Changed 'name' to 'repo' to match Octokit API
    };

    const octokit = github.getOctokit(githubToken);
    
    // Added await since this is an async operation
    const { data: issues } = await octokit.rest.issues.listForRepo({
      owner: repo.owner,
      repo: repo.repo,
    });

    console.log(issues);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
