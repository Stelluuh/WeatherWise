# Collaboration Steps:

1. Clone the Repository: Clone the original repository directly to your local machine.
    ```bash
    git clone <repository_url>
    ```

 
2. Create a feature branch

<u>If its your first time cloning the repository:</u>

a. Create a new branch for your changes using one of the following commands:

    ```bash
    git branch <branch_name> 
            OR
    git checkout -b <branch_name>
    ``` 
    
<u>If you already have the repository cloned and are working on a new feature:</u>   

a. Ensure you have the latest changes from the main branch:
```bash
git pull origin main
```
b. Create a new branch for your feature:
```bash
git branch <branch_name> OR git checkout -b <branch_name>
``` 


3. Make Changes: Implement the desired modifications to the code.

4. Commit Changes: Stage and commit your changes locally.
```bash
git add .
git commit -m 'your commit message'
```
5. Push Changes to the Original Repository: Push your changes to the original repository on GitHub.
```bash
git push origin <branch_name>
```

6. Create a Pull Request: Propose your changes to the maintainers by creating a pull request.
    - open GitHub Page of the original repository in your web browser.
    - Github will usually display a prompt to create a pull request for the branch you just pushed. Click on the "Compare & pull request" button.
    - Provide a title and description for your pull request, explaining the changes you made
    - Click the "Create pull request" button.


# Feature Branch Work Flow

This is a step by step process for using Git and Github.


# Understanding and Interpreting Git Branch Information

In this section, we will delve into the significance of branch information and provide guidance on how to interpret and read Git branch details. Specifically, we will focus on the information enclosed in parentheses, such as "(HEAD -> CollaborationGuide, origin/main, main)", breaking down each component and elucidating its role in the Git version control system. This knowledge will empower you to navigate and comprehend branch-related details within a Git repository effectively.

```HEAD -> main```

When we check our version history, you can see we have HEAD and its pointing to main. HEAD tells us that we are currently working in the main branch. Any commits that we create are going to be added to the main branch.

```HEAD -> main, stella```

When you create a new branch (ex: stella), the above reading says that you are currently working on your main branch, and then we have a copy of your version history and this copy is called 'stella'. You can checkout the 'stella' branch by using ```git checkout branch_name```.