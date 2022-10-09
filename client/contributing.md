
# Contributing

The following is a set of guidelines for contributing to Portfolio-1, which is hosted on [Github](https://github.com/rwiteshbera/Pixby/). These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

# How Can I Contribute?

In order to discuss changes, you are welcome to [open an issue](https://github.com/rwiteshbera/Pixby/issues) about what you would like to contribute. Enhancements are always encouraged and appreciated.

---

## ⭐ HOW TO MAKE A PULL REQUEST:

**1.** Start by making a Fork of the [Pixby](https://github.com/rwiteshbera/Pixby) repository. Click on the Fork symbol at the top right corner.

**2.** Clone your new fork of the repository in the terminal/CLI on your computer with the following command:

```bash
git clone https://github.com/<your-github-username>/Pixby
```

**3.** Navigate to the newly created Pixby project directory:

```bash
cd Pixby
```

**4.** Set upstream command:

```bash
git remote add upstream https://github.com/rwiteshbera/Pixby.git
```

**5.** Create a new branch:

```bash
git checkout -b YourBranchName
```

**6.** Sync your fork or your local repository with the origin repository:

- In your forked repository, click on "Fetch upstream"
- Click "Fetch and merge"

### Alternatively, Git CLI way to Sync forked repository with origin repository:

```bash
git fetch upstream
```

```bash
git merge upstream/main
```

### [Github Docs](https://docs.github.com/en/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github) for Syncing

**7.** Make your changes to the source code.

**8.** Stage your changes:

stage your changes for each file/folder
>
> By using public path it means it will add all files and folders under that folder, it is better to be specific

```bash
git add public
```

_or_

```bash
git add "<files_you_have_changed>"
```

**9.** Commit your changes:

```bash
git commit -m "<your_commit_message>"
```

**10.** Push your local commits to the remote repository:

```bash
git push origin YourBranchName
```

**11.** Create a [Pull Request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)!

**12.** **Congratulations!** You've made your first contribution to [**Pixby**](https://github.com/rwiteshbera/Pixby/contributors)! 🙌🏼

**_:trophy: After this, the maintainers will review the PR and will merge it if it helps move the project forward. Otherwise, it will be given constructive feedback and suggestions for the changes needed to add the PR to the codebase._**

# Contributing Guidelines

> :information_source: Please follow the [code of conduct](CODE_OF_CONDUCT.md) in all the interactions with Searchor and your fork repository.
This repository welcomes all contributions and corrections. Before contributing, please make sure you have read the guidelines below. <br>
If you're new to _git_ and/or _GitHub_, we suggest you go through [the GitHub Guides](https://github.com/rwiteshbera/Pixby).
1. Fork this repository
2. (Optional) Clone the fork via `git`

   - Using HTTPS

     ```shell
     git clone https://github.com/rwiteshbera/Pixby.git
     ```

   - Using GitHub CLI

     ```shell
     gh repo clone https://github.com/rwiteshbera/Pixby.git 
     ```

3. Create a new branch  
4. Start hacking on the new branch
5. Commit and push to the new branch
6. Make a pull request towards the original repository ([rwiteshbera](https://github.com/rwiteshbera/Pixby))

## Pull Request Guidelines

Please ensure your pull request adheres to the following guidelines:

- Make sure someone else has not already pulled the request for the changes you wish to do.
- The code should be without any warnings and errors.
- Any changes or suggestions to the existing content or repository are welcomed.

> You don't need to worry as admins will request the changes needed in the pull request before merging.
## Feedback:

If you have any feedback or suggestions please create an  <a href="https://github.com/rwiteshbera/Pixby/issues">issue</a> where you can mention some new features or extensions that will enhance this project✨.

<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------->
