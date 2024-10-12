interface BlogType {
  slug: string;
  content: string;
  title: string;
  description: string;
}

const sampleBlogs: BlogType[] = [
  {
    slug: "getting-started-with-tailwind",
    content: `# Getting Started with Tailwind CSS

Tailwind CSS is a utility-first CSS framework that enables rapid UI development. In this post, we will cover the basics, including how to set up Tailwind in your project and some essential utilities.

## Installation

To get started, you can install Tailwind via npm:

\`\`\`bash
npm install tailwindcss
\`\`\`

## Conclusion

With Tailwind, you can build responsive layouts quickly and efficiently.`,
    title: "Getting Started with Tailwind CSS",
    description: "A beginner's guide to using Tailwind CSS for your projects."
  },
  {
    slug: "understanding-react-hooks",
    content: `# Understanding React Hooks

React hooks are functions that let you use state and other React features without writing a class. This article will explore some of the most commonly used hooks.

## useState

The \`useState\` hook allows you to add state to your functional components:

\`\`\`javascript
const [count, setCount] = useState(0);
\`\`\`

## Conclusion

Hooks are a great way to simplify your components.`,
    title: "Understanding React Hooks",
    description: "An in-depth look at React hooks and how they can simplify your components."
  },
  {
    slug: "building-a-todo-app",
    content: `# Building a Todo App with JavaScript

In this tutorial, we will build a simple todo application using vanilla JavaScript. This project is perfect for beginners to understand DOM manipulation.

## Step 1: Setting Up HTML

First, set up a basic HTML structure:

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Todo App</title>
</head>
<body>
    <div id="app"></div>
</body>
</html>
\`\`\`

## Conclusion

By the end of this tutorial, you will have a fully functional todo app!`,
    title: "Building a Todo App with JavaScript",
    description: "Learn how to create a functional todo app from scratch."
  },
  {
    slug: "css-grid-vs-flexbox",
    content: `# CSS Grid vs Flexbox: Which One to Use?

CSS Grid and Flexbox are powerful layout systems. This article compares their use cases and helps you decide which to use when designing layouts.

## Use Cases

- **Flexbox**: Best for one-dimensional layouts.
- **Grid**: Ideal for two-dimensional layouts.

## Conclusion

Both systems are valuable tools in your CSS toolkit. Choose based on your layout needs.`,
    title: "CSS Grid vs Flexbox: Which One to Use?",
    description: "A comparison of CSS Grid and Flexbox for layout design."
  },
  {
    slug: "introduction-to-typescript",
    content: `# Introduction to TypeScript

TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It offers static type definitions to help developers catch errors early.

## Benefits of TypeScript

1. **Static Typing**: Helps catch errors during development.
2. **Improved Code Readability**: Types provide better documentation.
3. **Tooling Support**: Enhanced autocompletion and refactoring tools.

## Conclusion

TypeScript is a great choice for large codebases and team projects.`,
    title: "Introduction to TypeScript",
    description: "Learn about the benefits and features of TypeScript."
  },
  {
    slug: "building-responsive-websites",
    content: `# Building Responsive Websites

Responsive design is crucial for modern web development. This article explores techniques for creating websites that work on any device.

## Key Techniques

- **Media Queries**: Adjust styles based on screen size.
- **Flexible Grid Layouts**: Use percentages instead of fixed units.
- **Fluid Images**: Ensure images scale correctly with their containers.

## Conclusion

Embracing responsive design leads to better user experiences across devices.`,
    title: "Building Responsive Websites",
    description: "A guide to creating websites that adapt to various screen sizes."
  }
];


export default sampleBlogs