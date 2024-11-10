const core = require('@actions/core');


try {
	const githubToken = core.getInput('github-token');
	const repo = {
		owner: core.getInput('repo-owner'),
		name: core.getInput('repo-name'),
	}

	const octokit = github.getOctokit(githubToken)
	const issues = octokit.rest.issues.listForRepo({
		repo.owner,
		repo.name,
	});

	console.log(issues);

} catch (error) {
	// Handle errors and indicate failure
	core.setFailed(error.message);
}
