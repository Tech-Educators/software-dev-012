# Git Flow

## Terms

- local - This is your computer
- remote - This is your repository on GitHub

## Create a new Repository (repo)

- Click the "New" button on the left of the page
- In the name of the repository, give the repo a name
- IMPORTANT check the "Add a README.md" box
- Click "Create Repository"

## Clone the Repo

- Click the "Code" button and copy the link (it should be the SSH link)
- On your terminal type `git clone` followed by a space, and the link you copied
- When you run that, it will copy the repository from GitHub and put it on your local machine

## Open the project

- You can now navigate into that folder using `cd` followed by your repo name
- Run `code .` in your terminal to open the project in VS Code

## Pushing local changes to our remote (ACP)

Assuming you've saved some changes to the existing files or created/deleted others, you can check the changes by typing `git status` in your terminal.

- `git add .` will **ADD** all the changes made ready to be commited (this is often reffered to as "staging" the changes)
- `git commit -m "My message"` will **COMMIT** all the changes that were previously added (this is the snapshot)
- `git push` will **PUSH** all the commits you've made to the remote (GitHub)

## Deploy the site using GitHub Pages

Now that your work in on GitHub, we can turn it into a website.
In the repository:

- Click `Settings` and choose `Pages` from the left hand menu
- Under the `Branch` heading change where it says `None` to `main` and click `Save`
- Wait for it to deploy (3-4 minutes) then the link for your site should appear at the top of this page.

You may need to refresh the page to see the link, but it should look something like:

`https://yourprofile.github.io/your-repo-name`
