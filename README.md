### 1. Raise an Issue

1. **Go to the GitHub Repository:**
   Open the repository link: [Community-Website GitHub Repo](https://github.com/happyrao78/Community-Website.git).

2. **Navigate to the Issues Tab:**
   Click on the "Issues" tab near the top of the repository page.

3. **Click on “New Issue”:**
   This will open a new issue form where you can describe the problem or feature request.

4. **Provide Issue Details:**

   - **Title:** Give a concise title for the issue.
   - **Description:** Include detailed information about the issue or feature request. Be as specific as possible about what needs to be changed or added.

5. **Submit the Issue:**
   Click the "Submit new issue" button to create the issue. You will need to wait for it to be assigned to you by the maintainers (Happy Yadav or Veedansh ).

### 2. Clone the Repository

1. **Open VS Code:**
   Start Visual Studio Code.

2. **Open Terminal in VS Code:**
   Use the shortcut ` Ctrl+`` or navigate to  `View > Terminal`.

3. **Clone the Repository:**
   Enter the following command in the terminal:

   ```bash
   git clone https://github.com/happyrao78/Community-Website.git
   ```

   This command copies the repository to your local machine.

4. **Navigate to the Repository Directory:**
   ```bash
   cd 365Days-Website
   ```

### 3. Add a Remote Repository

1. **Add the Remote Repository:**
   You may want to add a remote repository (like the main repository or another remote). Use the following command to add it:
   ```bash
   git remote add origin https://github.com/happyrao78/Community-Website.git
   ```

### 4. Make and Test Changes

1. **Create a New Branch:**

   ```bash
   git checkout -b your-branch-name
   ```

   Replace `your-branch-name` with a descriptive name for your branch.

2. **Make Changes:**
   Edit the files as needed for your issue.

3. **Test Your Changes:**
   Ensure that you thoroughly test your changes to make sure they work as expected. This could involve running the application locally and verifying the modifications.

4. **Commit Your Changes:**
   ```bash
   git add .
   git commit -m "Brief description of changes"
   ```

### 5. Create a Pull Request (PR)

1. **Push Your Branch to GitHub:**

   ```bash
   git push origin your-branch-name
   ```

2. **Go to GitHub Repository:**
   Navigate to the repository on GitHub.

3. **Create a Pull Request:**

   - Go to the "Pull requests" tab.
   - Click "New pull request."
   - Select your branch and compare it with the main branch.
   - Provide a descriptive title and detailed description of the changes made.

4. **Attach a Sample Video:**

   - Record a video demonstrating the changes.
   - Upload the video to a file-sharing service or attach it to the pull request description if possible.

5. **Submit the Pull Request:**
   Click the "Create pull request" button.

Once you've followed these steps, the maintainers will review your pull request, and they might provide feedback or merge it into the main branch.
