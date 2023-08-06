import Image from "next/image";
import React from "react";

interface HeadingThreeProps {
  text: string;
}

const HeadingThree: React.FC<HeadingThreeProps> = ({ text }) => {
  return <h3 className="text-2xl py-4">{text}</h3>;
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
  return <p className="w-full pt-4 text-justify leading-7">{text}</p>;
};

interface ImageCompProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const ImageComp: React.FC<ImageCompProps> = ({ src, alt, width, height }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="w-full rounded-lg my-10"
    />
  );
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

const ContentRenderer: React.FC<ContentProps> = ({
  content,
}): React.JSX.Element => {
  const { children } = content.json;

  return (
    <>
      {children.map((node: any, index: any) => {
        switch (node.type) {
          case "heading-three":
            return <HeadingThree key={index} text={node.children[0].text} />;
          case "block-quote":
            return <BlockQuote key={index} text={node.children[0].text} />;
          case "paragraph":
            return <Paragraph key={index} text={node.children[0].text} />;
          case "image":
            return (
              <ImageComp
                key={index}
                src={node.src}
                alt={node.title}
                width={node.width}
                height={node.height}
              />
            );
          default:
            return <Paragraph key={index} text={node.children[0].text} />;
        }
      })}
    </>
  );
};

export default ContentRenderer;
