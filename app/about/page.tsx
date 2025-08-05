import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-center mb-8">
          About Binary Biome
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Binary Biome is a blog dedicated to providing high-quality tutorials and articles on a variety of programming languages and web development technologies. Our goal is to create a comprehensive resource for developers of all skill levels, from beginners to seasoned professionals.
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-center mb-6">
          Our Mission
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          We believe that everyone should have access to high-quality educational resources. That&apos;s why we&apos;re committed to creating content that is clear, concise, and easy to understand. We want to empower developers to learn new skills, build amazing things, and advance their careers.
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-center mb-6">
          About the Author
        </h2>
        <p className="text-lg text-muted-foreground">
          This blog is written and maintained by a passionate developer with a love for sharing knowledge. I have years of experience in the software industry and I&apos;m excited to share my insights with you.
        </p>
      </div>
    </div>
  );
};

export default About;
