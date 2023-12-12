# NoteCraft - Real-time Note-Taking and Collaboration Platform

## Overview

NoteCraft is a dynamic note-taking and collaboration platform built on Next.js, offering a seamless experience for your note-taking needs. Whether you're capturing ideas, working on projects, or collaborating with a team, NoteCraft provides a feature-rich environment to streamline your workflow.


## Key Features

- **Real-time Database**: Keep data in sync with real-time updates.
- **Notion-style Editor**: Enjoy a rich editing experience similar to Notion.
- **Light and Dark Mode**: Choose between light and dark themes for a personalized experience.
- **Infinite Children Documents**: Organize content with a hierarchical structure.
- **Trash Can & Soft Delete**: Safeguard against accidental deletions.
- **Authentication**: Secure data with user authentication.
- **File Management**:
  - File Upload
  - File Deletion
  - File Replacement
- **Icons for Each Document**: Visualize content with real-time icon changes.
- **Expandable Sidebar**: Navigate easily with a collapsible sidebar.
- **Mobile Responsiveness**: Access notes seamlessly on any device.
- **Publish Your Note to the Web**: Share content with the world through web publishing.
- **Fully Collapsible Sidebar**: Maximize workspace by collapsing the sidebar.
- **Landing Page**: Welcome users with an informative landing page.
- **Cover Image for Each Document**: Customize documents with cover images.
- **Recover Deleted Files**: Restore accidentally deleted files with ease.

## Prerequisites

Ensure Node.js version 18.x.x is installed on your system.

## Getting Started

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/Mohit-Mehra/NoteCraft.git
    ```

2. **Install Packages:**

    ```bash
    npm i
    ```

3. **Setup Environment Variables:**

    Create a `.env` file with the following content:

    ```env
    # Deployment used by `npx convex dev`
    CONVEX_DEPLOYMENT=
    NEXT_PUBLIC_CONVEX_URL=

    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
    CLERK_SECRET_KEY=

    EDGE_STORE_ACCESS_KEY=
    EDGE_STORE_SECRET_KEY=
    ```

4. **Setup Convex:**

    ```bash
    npx convex dev
    ```

5. **Start the Application:**

    ```bash
    npm run dev
    ```

## Contribute

Feel free to contribute by submitting issues or pull requests. Your feedback and contributions are highly appreciated!

Happy coding! 🚀