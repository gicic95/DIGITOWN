import React from 'react';

interface InlineStyleRange {
  offset: number;
  length: number;
  style: string;
}

interface Block {
  key: string;
  text: string;
  type: string;
  depth: number;
  inlineStyleRanges: InlineStyleRange[];
  entityRanges: any[];
  data: any;
}

interface PostBody {
  blocks: Block[];
  entityMap: any;
}

interface JsonToHtmlProps {
  json: string;
}

function renderInlineStyle(
  text: string,
  inlineStyleRanges: InlineStyleRange[]
): React.ReactNode {
  let currentPosition = 0;
  const styledText: React.ReactNode[] = [];

  inlineStyleRanges.forEach((range) => {
    const { offset, length, style } = range;

    // Add the plain text before the styled portion
    if (offset > currentPosition) {
      const plainText = text.slice(currentPosition, offset);
      styledText.push(plainText);
    }

    // Add the styled portion
    const styledPortion = (
      <span key={`${offset}-${offset + length}`} style={{ fontWeight: 'bold' }}>
        {text.slice(offset, offset + length)}
      </span>
    );
    styledText.push(styledPortion);

    currentPosition = offset + length;
  });

  // Add any remaining plain text
  if (currentPosition < text.length) {
    const plainText = text.slice(currentPosition);
    styledText.push(plainText);
  }

  return styledText;
}

const JsonToHtml: React.FC<JsonToHtmlProps> = ({ json }) => {
  const postBody: PostBody = JSON.parse(json);
  const blocks = postBody.blocks.map((block) => {
    if (block.type === 'unstyled') {
      const text = block.text;
      const styledText = renderInlineStyle(text, block.inlineStyleRanges);
      return <p key={block.key}>{styledText}</p>;
    }
    return null;
  });

  return <div className="postBody">{blocks}</div>;
};

export default JsonToHtml;
