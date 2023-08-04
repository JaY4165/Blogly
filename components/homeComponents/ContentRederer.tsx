import React from "react";

interface HeadingThreeProps {
  text: string;
}

const HeadingThree: React.FC<HeadingThreeProps> = ({ text }) => {
  return <h3>{text}</h3>;
};

interface BlockQuoteProps {
  text: string;
}

const BlockQuote: React.FC<BlockQuoteProps> = ({ text }) => {
  return <blockquote>{text}</blockquote>;
};

interface ParagraphProps {
  text: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ text }) => {
  return <p>{text}</p>;
};

interface ContentNode {
  type: string;
  children: { text: string }[];
}

interface ContentProps {
  content: {
    json: {
      children: ContentNode[];
    };
  };
}

const ContentRenderer: React.FC<ContentProps> = ({ content }) => {
  const { children } = content.json;

  return (
    <div>
      {children.map((node, index) => {
        switch (node.type) {
          case "heading-three":
            return <HeadingThree key={index} text={node.children[0].text} />;
          case "block-quote":
            return <BlockQuote key={index} text={node.children[0].text} />;
          case "paragraph":
            return <Paragraph key={index} text={node.children[0].text} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default ContentRenderer;
